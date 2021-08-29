import React from 'react';
import AssetConatiner from './components/container/AssetContainer.js';

const index = () => {
  const validity = useSelector(checkValidity);
  const [asset, setAsset] = useState(0);

  useEffect(() => {
    if (validity)
      axios.get('asset').then(res => {
        setAsset(res.data.asset);
      });
  }, [validity]);

  return (
    <>
      <AssetConatiner />
    </>
  );
};

export default index;
