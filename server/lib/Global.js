var PLAYER_OFFLINE	        = 0;
var PLAYER_ONLINE	        = 1;

var ROOM_TYPE_1             = 0;
var ROOM_TYPE_6             = 1;
var ROOM_TYPE_FRIEND        = 2;

var STATE_LOBBY		        = 0;
var STATE_IDLE		        = 1;
var STATE_FIND_1          = 2;
var STATE_FIND_6          = 3;
var STATE_FIND_FRIEND     = 4;
var STATE_GAME		        = 5;

var RES_FAILED		        = 0;
var RES_SUCCESS		        = 1;

var DEFAULT_NICK_INDEX	    = 0;
var DEFAULT_NICK_COUNT	    = 1;
var DEFAULT_NICK_SUFFIX     = "Player";
var DEFAULT_LEVEL		        = 0;
var DEFAULT_COIN            = 300;

var MAX_MEMBER_ROOM_1       = 2;
var MAX_MEMBER_ROOM_6       = 5;
var MAX_MEMBER_ROOM_FRIEND  = 2;

var NUM_KNOCK               = 52;

var CARD_NONE               = 0;
var CARD_CLUB               = 1;
var CARD_DIAMOND            = 2;
var CARD_HEART              = 3;
var CARD_SPADE              = 4;

var EMAIL_TYPE_NONE              = 0;
var EMAIL_TYPE_ADD_FRIEND        = 1;
var EMAIL_TYPE_REMOVE_FRIEND     = 2;
var EMAIL_TYPE_ACCEPT_FRIEND     = 3;
var EMAIL_TYPE_DECLINE_FRIEND    = 4;

var EMAIL_ACTION_NONE       = 0;
var EMAIL_ACTION_ACCEPT     = 1;
var EMAIL_ACTION_DECLINE    = 2;

var FRIEND_MATCH_REQ_SEND   = 0;
var FRIEND_MATCH_REQ_CLOSE  = 1;
var FRIEND_MATCH_REQ_ACCEPT = 2;
var FRIEND_MATCH_REQ_DECLINE    = 3;
var FRIEND_MATCH_REQ_COIN   = 4;

var COIN_PER_MATCH          = 50;
var LEVELUP_PER_MATCH       = 10;

var CONNECTION              = "connection";
var DISCONNECT              = "disconnect";

var REQUEST_USERINFO        = "REQUEST_USERINFO";
var RESPONSE_USERINFO       = "RESPONSE_USERINFO";

var REQUEST_MATCH           = "REQUEST_MATCH";
var RESPONSE_MATCH          = "RESPONSE_MATCH";

var REQUEST_JOINROOM        = "REQUEST_JOINROOM";
var RESPONSE_JOINROOM       = "RESPONSE_JOINROOM";
var NOTIFY_JOIN_PLAYER      = "NOTIFY_JOIN_PLAYER";
var NOTIFY_STARTGAME        = "NOTIFY_STARTGAME";

var REQUEST_CLOSE_MATCH     = "REQUEST_CLOSE_MATCH";
var REQUEST_LEAVE_ROOM      = "REQUEST_LEAVE_ROOM";
var NOTIFY_LEAVE_PLAYER     = "NOTIFY_LEAVE_PLAYER";
var NOTIFY_GAME_RESULT      = "NOTIFY_GAME_RESULT";

var REQUEST_PUT_CARD        = "REQUEST_PUT_CARD";
var NOTIFY_PUT_CARD         = "NOTIFY_PUT_CARD";

var REQUEST_START_GAME      = "REQUEST_START_GAME";
var REQUEST_RESTART_GAME    = "REQUEST_RESTART_GAME";

var REQUEST_UPDATE_PROFILE  = "REQUEST_UPDATE_PROFILE";
var RESPONSE_UPDATE_PROFILE = "RESPONSE_UPDATE_PROFILE";

var REQUEST_USERLIST        = "REQUEST_USERLIST";
var RESPONSE_USERLIST       = "RESPONSE_USERLIST";

var REQUEST_ADD_FRIEND      = "REQUEST_ADD_FRIEND";
var RESPONSE_ADD_FRIEND     = "RESPONSE_ADD_FRIEND";

var REQUEST_REMOVE_FRIEND   = "REQUEST_REMOVE_FRIEND";
var RESPONSE_REMOVE_FRIEND  = "RESPONSE_REMOVE_FRIEND";

var REQUEST_ACCEPT_FRIEND   = "REQUEST_ACCEPT_FRIEND";
var RESPONSE_ACCEPT_FRIEND  = "RESPONSE_ACCEPT_FRIEND";

var REQUEST_NOTIFICATION    = "REQUEST_NOTIFICATION";
var RESPONSE_NOTIFICATION   = "RESPONSE_NOTIFICATION";

var NOTIFY_NOTIFICATION     = "NOTIFY_NOTIFICATION";
var NOTIFY_UPDATE_PROFIE    = "NOTIFY_UPDATE_PROFILE";

var REQUEST_FRIEND_LIST     = "REQUEST_FRIEND_LIST";
var RESPONSE_FRIEND_LIST    = "RESPONSE_FRIEND_LIST";

var REQUEST_FRIEND_MATCH_REQ    = "REQUEST_FRIEND_MATCH_REQ";
var RESPONSE_FRIEND_MATCH_REQ   = "RESPONSE_FRIEND_MATCH_REQ";
var NOTIFY_FRIEND_MATCH_REQ     = "NOTIFY_FRIEND_MATCH_REQ";

var REQUEST_FRIEND_MATCH_RES    = "REQUEST_FRIEND_MATCH_RES";
var RESPONSE_FRIEND_MATCH_RES   = "RESPONSE_FRIEND_MATCH_RES";

var REQUEST_UPDATE_COIN     = "REQUEST_UPDATE_COIN";
var RESPONSE_UPDATE_COIN    = "RESPONSE_UPDATE_COIN";

var REQUEST_CHECK_NAME      = "REQUEST_CHECK_NAME";
var RESPONSE_CHECK_NAME     = "RESPONSE_CHECK_NAME";

var REQUEST_KNOCK           = "REQUEST_KNOCK";
var RESPONSE_KNOCK          = "RESPONSE_KNOCK";

exports.PLAYER_OFFLINE 	    = PLAYER_OFFLINE;
exports.PLAYER_ONLINE 	    = PLAYER_ONLINE;

exports.ROOM_TYPE_1         = ROOM_TYPE_1;
exports.ROOM_TYPE_6         = ROOM_TYPE_6;
exports.ROOM_TYPE_FRIEND    = ROOM_TYPE_FRIEND;

exports.STATE_LOBBY 	    = STATE_LOBBY;
exports.STATE_IDLE 		    = STATE_IDLE;
exports.STATE_FIND_1      = STATE_FIND_1;
exports.STATE_FIND_6      = STATE_FIND_6;
exports.STATE_FIND_FRIEND = STATE_FIND_FRIEND;
exports.STATE_GAME		    = STATE_GAME;

exports.RES_FAILED		    = RES_FAILED;
exports.RES_SUCCESS		    = RES_SUCCESS;

exports.DEFAULT_NICK_INDEX	= DEFAULT_NICK_INDEX;
exports.DEFAULT_NICK_COUNT	= DEFAULT_NICK_COUNT;
exports.DEFAULT_NICK_SUFFIX	= DEFAULT_NICK_SUFFIX;
exports.DEFAULT_LEVEL		= DEFAULT_LEVEL;
exports.DEFAULT_COIN        = DEFAULT_COIN;

exports.MAX_MEMBER_ROOM_1   = MAX_MEMBER_ROOM_1;
exports.MAX_MEMBER_ROOM_6   = MAX_MEMBER_ROOM_6;
exports.MAX_MEMBER_ROOM_FRIEND = MAX_MEMBER_ROOM_FRIEND;

exports.CARD_NONE               = CARD_NONE;
exports.CARD_CLUB               = CARD_CLUB;
exports.CARD_DIAMOND            = CARD_DIAMOND;
exports.CARD_HEART              = CARD_HEART;
exports.CARD_SPADE              = CARD_SPADE;

exports.EMAIL_TYPE_NONE              = EMAIL_TYPE_NONE;
exports.EMAIL_TYPE_ADD_FRIEND        = EMAIL_TYPE_ADD_FRIEND;
exports.EMAIL_TYPE_REMOVE_FRIEND     = EMAIL_TYPE_REMOVE_FRIEND;
exports.EMAIL_TYPE_ACCEPT_FRIEND     = EMAIL_TYPE_ACCEPT_FRIEND;
exports.EMAIL_TYPE_DECLINE_FRIEND    = EMAIL_TYPE_DECLINE_FRIEND;

exports.EMAIL_ACTION_NONE       = EMAIL_ACTION_NONE;
exports.EMAIL_ACTION_ACCEPT     = EMAIL_ACTION_ACCEPT;
exports.EMAIL_ACTION_DECLINE    = EMAIL_ACTION_DECLINE;

exports.FRIEND_MATCH_REQ_SEND   = FRIEND_MATCH_REQ_SEND;
exports.FRIEND_MATCH_REQ_CLOSE  = FRIEND_MATCH_REQ_CLOSE;
exports.FRIEND_MATCH_REQ_ACCEPT = FRIEND_MATCH_REQ_ACCEPT;
exports.FRIEND_MATCH_REQ_DECLINE    = FRIEND_MATCH_REQ_DECLINE;
exports.FRIEND_MATCH_REQ_COIN   = FRIEND_MATCH_REQ_COIN;

exports.COIN_PER_MATCH = COIN_PER_MATCH;
exports.LEVELUP_PER_MATCH = LEVELUP_PER_MATCH;

exports.CONNECTION          = CONNECTION;
exports.DISCONNECT          = DISCONNECT;

exports.REQUEST_USERINFO    = REQUEST_USERINFO;
exports.RESPONSE_USERINFO   = RESPONSE_USERINFO;
exports.REQUEST_MATCH       = REQUEST_MATCH;
exports.RESPONSE_MATCH      = RESPONSE_MATCH;
exports.REQUEST_JOINROOM    = REQUEST_JOINROOM;
exports.RESPONSE_JOINROOM   = RESPONSE_JOINROOM;
exports.NOTIFY_JOIN_PLAYER  = NOTIFY_JOIN_PLAYER;
exports.NOTIFY_STARTGAME    = NOTIFY_STARTGAME;
exports.REQUEST_CLOSE_MATCH = REQUEST_CLOSE_MATCH;
exports.REQUEST_LEAVE_ROOM  = REQUEST_LEAVE_ROOM;
exports.NOTIFY_LEAVE_PLAYER = NOTIFY_LEAVE_PLAYER;
exports.NOTIFY_GAME_RESULT  = NOTIFY_GAME_RESULT;
exports.REQUEST_PUT_CARD    = REQUEST_PUT_CARD;
exports.NUM_KNOCK           = NUM_KNOCK;
exports.NOTIFY_PUT_CARD     = NOTIFY_PUT_CARD;
exports.REQUEST_START_GAME  = REQUEST_START_GAME;
exports.REQUEST_RESTART_GAME  = REQUEST_RESTART_GAME;
exports.REQUEST_UPDATE_PROFILE  = REQUEST_UPDATE_PROFILE;
exports.RESPONSE_UPDATE_PROFILE = RESPONSE_UPDATE_PROFILE;
exports.REQUEST_USERLIST        = REQUEST_USERLIST;
exports.RESPONSE_USERLIST       = RESPONSE_USERLIST;
exports.REQUEST_ADD_FRIEND      = REQUEST_ADD_FRIEND;
exports.RESPONSE_ADD_FRIEND     = RESPONSE_ADD_FRIEND;
exports.REQUEST_REMOVE_FRIEND   = REQUEST_REMOVE_FRIEND;
exports.RESPONSE_REMOVE_FRIEND  = RESPONSE_REMOVE_FRIEND;
exports.REQUEST_ACCEPT_FRIEND   = REQUEST_ACCEPT_FRIEND;
exports.RESPONSE_ACCEPT_FRIEND  = RESPONSE_ACCEPT_FRIEND;
exports.REQUEST_NOTIFICATION    = REQUEST_NOTIFICATION;
exports.RESPONSE_NOTIFICATION   = RESPONSE_NOTIFICATION;
exports.NOTIFY_NOTIFICATION     = NOTIFY_NOTIFICATION;
exports.NOTIFY_UPDATE_PROFIE    = NOTIFY_UPDATE_PROFIE;
exports.REQUEST_FRIEND_LIST     = REQUEST_FRIEND_LIST;
exports.RESPONSE_FRIEND_LIST    = RESPONSE_FRIEND_LIST;
exports.REQUEST_FRIEND_MATCH_REQ    = REQUEST_FRIEND_MATCH_REQ;
exports.RESPONSE_FRIEND_MATCH_REQ   = RESPONSE_FRIEND_MATCH_REQ;
exports.NOTIFY_FRIEND_MATCH_REQ     = NOTIFY_FRIEND_MATCH_REQ;
exports.REQUEST_FRIEND_MATCH_RES    = REQUEST_FRIEND_MATCH_RES;
exports.RESPONSE_FRIEND_MATCH_RES   = RESPONSE_FRIEND_MATCH_RES;
exports.REQUEST_UPDATE_COIN     = REQUEST_UPDATE_COIN;
exports.RESPONSE_UPDATE_COIN    = RESPONSE_UPDATE_COIN;
exports.REQUEST_CHECK_NAME      = REQUEST_CHECK_NAME;
exports.RESPONSE_CHECK_NAME     = RESPONSE_CHECK_NAME;
exports.REQUEST_KNOCK           = REQUEST_KNOCK;
exports.RESPONSE_KNOCK          = RESPONSE_KNOCK;