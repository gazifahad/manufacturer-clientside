import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <p className='text-3xl'>Hello <span className='text-primary'>{user.displayName}</span></p>
            <p></p>
        </div>
    );
};

export default MyProfile;