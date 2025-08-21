import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    providers: []
} satisfies NextAuthConfig;
// 在确保类型正确的同时，保留更精确的类型信息，让后续代码能获得更准确的类型提示和检查。satisfies