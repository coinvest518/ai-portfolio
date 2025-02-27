import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { password } = req.body;
        // Change this to your desired password
        const correctPassword = 'money518';

        if (password === correctPassword) {
            res.setHeader(
                'Set-Cookie',
                cookie.serialize('authToken', 'authenticated', {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 60 * 60, // Cookie expires in 1 hour
                    sameSite: 'strict',
                    path: '/',
                })
            );

            return res.status(200).json({ success: true });
        } else {
            return res.status(401).json({ message: 'Incorrect password' });
        }
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
}