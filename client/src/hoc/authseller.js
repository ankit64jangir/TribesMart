import React, { useEffect } from 'react';
import { authseller } from '../_actions/seller_actions';
import { useSelector, useDispatch } from "react-redux";

export default function (ComposedClassS, reload, adminRoute = null) {
    function AuthenticationCheck(props) {

        let seller = useSelector(state => state.seller);
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(authseller()).then(async response => {
                if (await !response.payload.isAuth) {
                    if (reload) {
                        props.history.push('/sellerLogin')
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    }
                    else {
                        if (reload === false) {
                            props.history.push('/')
                        }
                    }
                }
            })
            
        }, [dispatch, props.history, seller.googleAuth])



        return (
            <ComposedClassS {...props} seller={seller} />
        )
    }
    return AuthenticationCheck
}