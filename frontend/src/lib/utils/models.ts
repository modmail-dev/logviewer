// src/models.ts

export interface User {
	id: number;
	name: string;
	discriminator: number;
	avatar_url: string;
	mod: boolean;
}

export interface Attachment {
	id: number;
	filename: string;
	url: string;
	is_image: boolean;
	size: number;
}

export interface Message {
	message_id: number;
	timestamp: string; // ISO date string
	author: User;
	content: string;
	attachments: Attachment[];
	type: string;
	edited: boolean;
}

export interface Log {
	id: string;
	key: string;
	open: boolean;
	created_at: string; // ISO date string
	closed_at: string | null;
	channel_id: number;
	guild_id: number;
	bot_id: number;
	recipient: User;
	creator: User;
	closer: User | null;
	messages: Message[];
	close_message: string;
	nsfw: boolean;
	title: string;
}

// Define the types for WebSocket updates
export interface UserUpdate {
	id: number;
	name: string;
	discriminator: number;
	avatar_url: string;
	mod: boolean;
}

export interface MessageUpdate {
	message_id: number;
	timestamp: string; // ISO date string
	author: UserUpdate;
	content: string;
	attachments: Attachment[];
	type: string;
	edited: boolean;
}

export interface LogUpdate {
	key: string;
	open?: boolean;
	closed_at?: string | null;
	close_message?: string;
	messages?: MessageUpdate[];
}

export enum RenderType {
	EMBED,
	REPLY,
	NORMAL,
	WEBHOOK
}

export interface MessageContext {
	type: RenderType;
	largeEmojis: boolean;
}

export interface Role {
	id: number;
	name: string;
	hexColor: string | null;
}

export enum ChannelType {
	CHANNEL = 0,
	VOICE = 1,
	THREAD = 2,
	FORUM = 3
}

export interface Channel {
	id: number;
	name: string;
	type: ChannelType;
	nsfw: boolean;
	dm: boolean;
}
