import React, { useEffect, useState } from 'react';
import { fetcUsers } from '../redux';
import { connect } from 'react-redux';

const UserContainer = ({ userData, fetchUsers }) => {
  const [search, setSearchQuery] = useState('');
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User lists</h2>
      <input
        type="text"
        Placeholder="Search..."
        value={search}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        <table border={2}>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>
              Address
              <tr>
                <th>Street</th>
                <th>Suite</th>
                <th>City</th>
                <th>Zipcode</th>
                <th>
                  Geo
                  <tr>
                    <th>Lat</th>
                    <th>Lag</th>
                  </tr>
                </th>
              </tr>
            </th>

            <th>Phone</th>
            <th>Website</th>
            <th>
              Company
              <tr>
                <th>Name</th>
                <th>CatchPharse</th>
                <th>Bs</th>
              </tr>
            </th>
          </tr>
          {userData &&
            userData.users &&
            userData.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <tr>
                    <td>{user.address.street}</td>
                    <td>{user.address.suite}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.zipcode}</td>
                    <td>
                      <tr>
                        <td>{user.address.geo.lat}</td>
                        <td>{user.address.geo.lng}</td>
                      </tr>
                    </td>
                  </tr>
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <tr>
                    <td>{user.company.name}</td>
                    <td>{user.company.catchPhrase}</td>
                    <td>{user.company.bs}</td>
                  </tr>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetcUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
