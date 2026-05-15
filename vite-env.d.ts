/// <reference types="vite/client" />

declare const __BASE_PATH__: string;
declare const __IS_PREVIEW__: boolean;
declare const __READDY_PROJECT_ID__: string;
declare const __READDY_VERSION_ID__: string;
declare const __READDY_AI_DOMAIN__: string;

interface ImportMetaEnv {
	readonly VITE_FIREBASE_API_KEY?: string;
	readonly VITE_FIREBASE_AUTH_DOMAIN?: string;
	readonly VITE_FIREBASE_PROJECT_ID?: string;
	readonly VITE_FIREBASE_STORAGE_BUCKET?: string;
	readonly VITE_FIREBASE_MESSAGING_SENDER_ID?: string;
	readonly VITE_FIREBASE_APP_ID?: string;
	readonly VITE_ECHO_DEMO_VIDEO_URL?: string;
	readonly VITE_ECHO_PROMO_VIDEO_URL?: string;
	readonly VITE_ECHO_DEMO_VIDEO_POSTER?: string;
	readonly VITE_ECHO_PROMO_VIDEO_POSTER?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}