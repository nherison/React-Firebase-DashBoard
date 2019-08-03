import React from 'react';
import {     TextField, EmailField, DateField, NumberField,
     Show, TabbedForm, FormTab
} from 'react-admin';
import _ImageField from './_ImageField';
import _VideoField from './_VideoField';
import {_ImageSlideShow} from './_ImageSlideShow';

const UserTitle = ({ record }) => {
    
    return <span>User {record ? `"${record.username}"` : ''}</span>;
};

const Ispic = ({ record}) => {
    
    return <TabbedForm record={record}>
        <FormTab label='basic'>
            <TextField source="username" />
            <TextField source="college" />
            <EmailField source="email" />
            <DateField source="birthday" />
            <NumberField source="height" />
        </FormTab>
        
        {record["imageUrls"] && <FormTab label='Pictures'>
            <_ImageSlideShow imageUrls={record["imageUrls"]}/>
        </FormTab>
        }
        {record.videoUrl && <FormTab label='Video'> 
            <_VideoField source="videoUrl" />
        </FormTab>
    }
    </TabbedForm>;
}


const UserShow = (props) => {
    return(
        <Show title ={<UserTitle />} {...props}>
            <Ispic {...props}/>
        </Show>
    );
};
export default UserShow;
