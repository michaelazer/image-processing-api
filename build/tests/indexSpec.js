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
const imageProcessing_1 = __importDefault(require("../utilities/imageProcessing"));
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const imageName = "test";
const image = path_1.default.join(__dirname, '../', 'public', 'input', imageName + ".jpg");
const width = 500;
const height = 500;
const outputName = imageName + "-" + width + "x" + height;
const output = path_1.default.join(__dirname, '../', 'public', 'output', outputName + ".jpg");
describe("testing Jasmine", () => {
    it("should show that Jasmine is working", () => {
        const a = 1;
        expect(a).toBe(1);
    });
});
describe("Image processing working properly", () => __awaiter(void 0, void 0, void 0, function* () {
    it("should create a file", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, imageProcessing_1.default)(image, width, height, output);
        expect(fs_1.default.existsSync(output)).toBe(true);
    }));
    it("should change file width", () => __awaiter(void 0, void 0, void 0, function* () {
        const metadata = yield (0, sharp_1.default)(output).metadata();
        expect(metadata.width).toBe(width);
    }));
    it("should change file height", () => __awaiter(void 0, void 0, void 0, function* () {
        const metadata = yield (0, sharp_1.default)(output).metadata();
        expect(metadata.height).toBe(height);
    }));
}));
