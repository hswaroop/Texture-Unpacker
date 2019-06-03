const gm = require("gm");
const atlasJson = require("./button_panel_base");
let graphicsObj = gm("./button_panel_base_atlas.png");
    const framesArray = atlasJson.frames;
    getPngs(framesArray);

    async function getPngs(framesArray) {
        const framesArrayLength = framesArray.length;
        for(let i=0; i<framesArrayLength; i++) {
            let result = await makePngs(framesArray[i]);
            console.log(result);
        }
    }

    function makePngs(frameObj) {
        return new Promise((resolve, reject) => {
            let frameRect = frameObj.frame;
            let filePath = "./UnpackedAssets/" + frameObj.filename;
            graphicsObj
                .crop(frameRect.w, frameRect.h, frameRect.x, frameRect.y)
                .write(filePath, err => {
                    err ? reject(err) : resolve("done");
                });
        })
    }

