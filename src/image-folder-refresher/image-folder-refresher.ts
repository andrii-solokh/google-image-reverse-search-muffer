import { readdirSync, lstatSync } from "fs";
import ImageRefresher from "../image-refresher/image-refresher";

export default class ImageFolderRefresher {
    public static refresh(folderPath: string) {
        for (const imagePath of readdirSync(folderPath)) {
            const path = `${folderPath}/${imagePath}`;
            if (lstatSync(path).isDirectory()) {
                this.refresh(path);
            } else {
                if (path.endsWith('.jpg')) {
                    ImageRefresher.refresh(path);
                }
            }
        }
    }

    public static getContent(folderPath: string) {}
}
