import { useDispatch, useSelector } from "react-redux";
import FilerobotImageEditor, { TABS, TOOLS } from 'react-filerobot-image-editor';
import { setFinalDesignFile, setOriginalImgFile, setUploadedImgLocation } from '../../../../redux/actions/actionCreators';


const ImageEditor = () => {

    const dispatch = useDispatch();
    const { type, side } = useSelector(state => state.order);

    const cart = useSelector(state => state.cart)

    return (
        <FilerobotImageEditor
            source={`/images/products/${type}_${side}.png`}

            defaultSavedImageName="Final design"

            onSave={async ({ imageBase64 }, { annotations }) => {
                dispatch(setUploadedImgLocation({
                    width: annotations.watermark.width,
                    x: annotations.watermark.x,
                    y: annotations.watermark.y
                }));

                dispatch(setFinalDesignFile(imageBase64, cart?.length));
                dispatch(setOriginalImgFile(annotations.watermark.image, cart?.length));
            }}

            Text={{ text: 'Text...' }}

            theme={{
                palette: {
                    "accent-primary": "#4EA9FD",
                    "accent-primary-hover": "#2A89E1",
                    "accent-primary-active": "#4EA9FD",
                }
            }}

            tabsIds={[TABS.WATERMARK]}
            defaultTabId={TABS.WATERMARK}
            defaultToolId={TOOLS.TEXT}
        />
    )
}

export default ImageEditor