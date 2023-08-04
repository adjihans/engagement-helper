export interface MessageCount {
    count: string;
      timeBucket: string;
      channelId: string;
}

export interface Channel {
    label?: string | null;
    value?: string | null;
    type?: number | null;
    guild?: string | null;
    guildId?: string | null;
    parentId?: string|null;
    permissionOverwrites?: string[];
    messages?: unknown[];
    threads?: unknown[];
    nsfw?: boolean;
    id: string;
    name: string;
    rawPosition?: number | null;
    topic?: string | null;
    lastMessageId?: string | null;
    rateLimitPerUser?: number | null;
    createdTimestamp?: number | null;
}