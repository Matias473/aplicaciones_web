import jwt from 'jsonwebtoken';

const ACCESS_SECRET = 'secret12345utd';

export const generateAccessToken = (UserId: string) => {
    return jwt.sign(
        { UserId },
        ACCESS_SECRET,
        {
            expiresIn: '15m'
        }
    );
}
