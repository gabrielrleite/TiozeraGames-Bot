require("http").createServer((req, res) => res.end(process.version)).listen()
const Discord = require("discord.js");
const { Client, Message, EmbedBuilder, Collection, WebhookClient } = require("discord.js");
const fs = require('fs');
const express = require('express');
require('dotenv').config();
require("./mongo_login");
const config = require("../../settings/config.json");

module.exports = { Client, Discord, Message, EmbedBuilder, Collection, WebhookClient, fs, express };