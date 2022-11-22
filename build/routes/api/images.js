"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const validations_1 = __importDefault(require("../../middleware/validations"));
const imageProcessing_1 = __importDefault(require("../../utilities/imageProcessing"));
const images = express_1.default.Router();
images.get('/', validations_1.default, (req, res) => {
    try {
        const imageName = req.query.image;
        const image = path_1.default.join(__dirname, '../', '../', 'public', 'input', imageName + '.jpg');
        const width = parseInt(req.query.width);
        const height = parseInt(req.query.height);
        const outputName = imageName + '-' + width.toString() + 'x' + height.toString();
        const output = path_1.default.join(__dirname, '../', '../', 'public', 'output', outputName + '.jpg');
        if (fs_1.default.existsSync(output)) {
            res.sendFile(`${output}`);
        }
        else {
            (0, imageProcessing_1.default)(image, width, height, output)
                .then(() => {
                res.sendFile(`${output}`);
            })
                .catch(() => {
                res.status(500).send('Something broke!');
            });
        }
    }
    catch (error) {
        res.status(500).send('Something broke!');
    }
});
exports.default = images;
