import React from 'react';
import { Admin, Resource } from 'react-admin';
import { RestProvider, AuthProvider, base64Uploader } from './lib';

import users from './users';

const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "-",
	storageBucket: "",
	messagingSenderId: ""
};

const trackedResources = [{ name: 'users', isPublic: true }];

const authConfig = {
	userProfilePath: '/users/',
	userAdminProp: 'isAdmin'
};/*
authProvider={AuthProvider(authConfig)}*/
// to run this demo locally, please feel free to disable authProvider to bypass login page

const dataProvider = base64Uploader(RestProvider(firebaseConfig, { trackedResources }));

const App = () => (
	<Admin
		dataProvider={dataProvider}
	//authProvider={AuthProvider(authConfig)}
	>
		<Resource name="users" {...users} />
	</Admin>
);
export default App;