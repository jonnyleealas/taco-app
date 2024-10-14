"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yelp_developers_1 = __importDefault(require("@api/yelp-developers"));
yelp_developers_1.default.v3_business_search({ sort_by: 'best_match', limit: '20' })
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));
