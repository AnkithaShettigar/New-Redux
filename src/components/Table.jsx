import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/').then((res) => {
      const user = res.data;
      setData(user);
    });
  }, []);
  return (
    <div>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Table;
