import React from 'react';
import Predict from '../presentation/Predict';
import { useMediaQuery } from 'react-responsive';

const PredictContainer = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 481px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
  });
  // const [inProgress, setInProgress] = useState(true);
  // const [predict, setPredict] = useState([]);

  // useEffect(() => {
  //   axios.get('').then(res => {
  //     setPredict(res.data);
  //     setInProgress(false);
  //     //console.log(res.data);
  //   });
  // }, []);

  // if (inProgress) {
  //   return <div></div>;

  const tmpPredict = [
    { name: '삼성전자', average: '+6.9', rf: '+6.9', xgb: '+6.9' },
    { name: '카카오', average: '+1.9', rf: '+1.9', xgb: '+1.9' },
    { name: '대한항공', average: '-0.9', rf: '-0.9', xgb: '-0.9' },
    { name: '대한전선', average: '+4.6', rf: '+4.6', xgb: '+4.6' },
    { name: '이트론', average: '+2.6', rf: '+2.6', xgb: '+2.6' },
    { name: 'Sk하이닉스', average: '-2.1', rf: '-2.1', xgb: '-2.1' },
    { name: '카카오뱅크', average: '-3.5', rf: '-3.5', xgb: '-3.5' },
  ];

  for (let i = 0; i < tmpPredict.length; i++) {
    tmpPredict[i].order = i + 1;
  }

  return (
    <>
      <Predict info={tmpPredict} isPc={isPc} />
    </>
  );
};

export default PredictContainer;
