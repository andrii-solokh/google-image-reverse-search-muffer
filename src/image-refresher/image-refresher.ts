import { read, BLEND_OVERLAY } from "jimp";

export default class ImageRefresher {
    public static refresh(imagePath: string) {
        read(imagePath, async (err, img) => {
            if (err) throw err;
            console.log(imagePath);

            img.mirror(false, true)
                .composite(await (await read(imagePath)).invert(), 0, 0, {
                    mode: BLEND_OVERLAY,
                    opacitySource: 0.01,
                    opacityDest: 1,
                })
                .rotate(-180)
                .contrast(-0.01)
                .brightness(0.01)
                // .blur(1)
                .scale(0.99)
                .write("new/" + imagePath); // save
        });
    }
}
