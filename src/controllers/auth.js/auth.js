import {Customer, DeliveryPartner} from '../../models/user.js'

import jwt  from 'jsonwebtoken'


const generateToken = (user)=>{
    const accessToken = jwt.sign(
        {userId : user._id, role : user.role},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '1d'}
    )

    const refreshToken = jwt.sign(
        {userId : user._id, role : user.role},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '7d'}
    )
    return {accessToken,refreshToken};
}