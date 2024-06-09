import Vue from 'vue';
import UserbackPlugin from '@userback/vue2';

const token = '38243|75407|MC4B6gLHdzd608E1fRlAxMhf1';
const domain = process.env.FE_BASE_URL;

Vue.use(UserbackPlugin, { token, domain });
