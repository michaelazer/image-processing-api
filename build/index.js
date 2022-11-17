"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require('path');
const sharp_1 = __importDefault(require("sharp"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    const image = req.query.image;
    const height = parseInt(req.query.height);
    const width = parseInt(req.query.width);
    const output = path.join(__dirname, 'public', 'images', 'output.jpg');
    const processImage = (image, width, height) => __awaiter(void 0, void 0, void 0, function* () {
        const sharpie = yield (0, sharp_1.default)(path.join(__dirname, 'public', 'images', image))
            .resize(width, height)
            .toFile(output);
        console.log(sharpie);
        return;
    });
    processImage(image, width, height).then(() => res.send("<h1>Before</h1><img src='/images/input.jpg'><br><h1>After</h1><img src='/images/output.jpg'>"));
});
app.listen(port, () => {
    console.log(`working on https://localhost:${port}`);
});
