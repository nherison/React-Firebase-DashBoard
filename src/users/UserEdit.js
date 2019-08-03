import React from 'react';
import {
     SimpleForm, Edit, ImageInput,
    TextInput, DateInput,
} from 'react-admin';
import _ImageField from './_ImageField';
import _VideoField from './_VideoField';
import {_ImageSlideShow, } from './_ImageSlideShow';

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.username}"` : ''}</span>;
};
const UserEdit = (props) => (
    <Edit title ={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="email" />
            <DateInput source="birthday" />
            <ImageInput source="imageUrls[0]" />
            <ImageInput source="imageUrls[1]" />
            <ImageInput source="imageUrls[2]" />
        </SimpleForm>
    </Edit>
);
export default UserEdit;