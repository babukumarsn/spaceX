export interface Launches {
    fairings: Fairings;
    links: Links;
    static_fire_date_utc: String;
    static_fire_date_unix: Number;
    tbd: Boolean;
    net: Boolean;
    window: Number;
    rocket: String;
    success: Boolean;
    details: String;
    crew: [];
    ships: [];
    capsules: [];
    payloads: String[];
    launchpad: String;
    auto_update: Boolean;
    launch_library_id: null;
    failures: Failures[];
    flight_number: Number;
    name: String;
    date_utc: string;
    date_unix: Number;
    date_local: String;
    date_precision: String;
    upcoming: Boolean;
    cores: Cores[];
    id: String;
    year: number;
}

export interface Fairings {
    reused: Boolean;
    recovery_attempt: Boolean;
    recovered: Boolean;
    ships: []
}

export interface Patch {
    small: String;
    large: String;
}

export interface Cores {
    core: String;
    flight: Number;
    gridfins: Boolean;
    legs: Boolean;
    reused: Boolean;
    landing_attempt: Boolean;
    landing_success: String;
    landing_type: String;
    landpad: String;
}

export interface Failures {
    time: Number,
    altitude: String,
    reason: String;
}

export interface Reddit {
    campaign: String;
    launch: String;
    media: String;
    recovery: String;
}

export interface Flickr {
    small: [];
    original: [];
}

export interface Links {
    patch: Patch;
    reddit: Reddit;
    flickr: Flickr;
    presskit: String;
    webcast: String;
    youtube_id: String;
    article: String;
    wikipedia: String;
}