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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const imageProcessing_1 = __importDefault(require("../../helpers/imageProcessing"));
const images = express_1.default.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageName = req.query.image;
    const image = path_1.default.join(__dirname, '../', '../', 'public', 'input', imageName + ".jpg");
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const outputName = imageName + "-" + width + "x" + height;
    const output = path_1.default.join(__dirname, '../', '../', 'public', 'output', outputName + ".jpg");
    if (fs_1.default.existsSync(output)) {
        console.log('from cache');
    }
    else {
        console.log('running process');
        yield (0, imageProcessing_1.default)(image, width, height, output);
    }
    res.send(`
            <h1>${imageName}</h1><br> \
            <h2>${width}x${height}</h2><br> \
            <img src="../output/${outputName}.jpg" alt="Output image"> \
            `);
}));
exports.default = images;
