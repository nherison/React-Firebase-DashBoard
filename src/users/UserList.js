import React from 'react';
import { List, Responsive, SimpleList, Datagrid, TextField, EmailField, DateField,
    EditButton,  
    DeleteButton,
    ShowButton,   
} from 'react-admin';
import _ImageField from './_ImageField';
import _VideoField from './_VideoField';
import {_ImageSlideShow, Slideshow} from './_ImageSlideShow';

const UserList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.username}
                    secondaryText={record => `${record.email}`}
                    tertiaryText={record => record.birthday}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="username" />
                    <EmailField source="email" />
                    <DateField source="birthday" />                
                    <ShowButton />
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            }
        />
    </List>
);
export default UserList;