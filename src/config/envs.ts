

import 'dotenv/config';
import env from 'env-var';

export const envs = {
    PORT: env.get('PORT').asPortNumber(),
    PUBLIC_PATH: env.get('PUBLIC_PATH').default('public').asString()
};


