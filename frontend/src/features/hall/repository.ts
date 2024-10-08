import { showMessage } from "../../utils/alert";
import { getJwtToken } from "../../utils/function";
import { responseInterface } from "../Model";
import axios from "../axios";
import { HallInterface } from "./Model";

export const readHallList = async () => {

    try {

        const path = "/hall-list";

        let accessToken = getJwtToken()

        const response = await axios.get(path, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        // console.log(response);
        const res = response.data as responseInterface;

        if (response.data.code === 200) {
            // console.log("response", response.data.data)
            return res.data
        }

        showMessage({ message: response.data.message })
        return []

    } catch (error) {
        showMessage({ message: error })
        return [];

    }
}



export const addHall = async (hall: HallInterface) => {

    let path = `/hall-add`
    // let payload = hall
    const formData = new FormData();
    formData.append("name", hall.name);
    formData.append("about", hall.about);
    formData.append("date_of_establish", hall.date_of_establish);
    formData.append("established_by", hall.established_by);
    formData.append("file", hall.imagefile);

    // console.log(payload)
    let accessToken = getJwtToken();


    try {

        const response = await axios.post(path, formData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                "Content-Type": "multipart/form-data"
            }
        });

        console.log(response)
        const res = response.data as responseInterface;
        if (response.data.code === 200) {
            showMessage({ message: res.message, status: res.code });
            return true;
        }

        showMessage({ message: res.message, status: res.code })
        return false;

    } catch (error) {
        showMessage({ message: error })
        // return [];
    }

}

//update  a hall
export const editHall = async (hall: HallInterface) => {

    let path = `/hall-edit`

    let payload = hall

    let accessToken = getJwtToken();
    const formData = new FormData();

    formData.append("name", hall.name ?? "");
    formData.append("_id", hall._id ?? "");
    formData.append("about", hall.about ?? "");
    formData.append("date_of_establish", hall.date_of_establish ?? "");
    formData.append("established_by", hall.established_by ?? "");
    formData.append("image", hall.image ?? "");
    formData.append("warden_incharge", hall.warden_incharge ?? "");
    formData.append("care_taker", hall.care_taker ?? "");
    formData.append("wardenEmail", hall.wardenEmail ?? "");
    formData.append("generalSecretory", hall.generalSecretory ?? "");
    formData.append("sportSecretary", hall.sportSecretary ?? "");
    formData.append("environmentalSecretory", hall.environmentalSecretory ?? "");
    formData.append("culuralSecretary", hall.culuralSecretary ?? "");
    formData.append("maintainanceSecretory", hall.maintainanceSecretory ?? "");
    formData.append("file", hall.imagefile ?? "");

    try {

        const response = await axios.post(path, formData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                "Content-Type": "multipart/form-data"

            }
        });

        console.log(response)
        const res = response.data as responseInterface
        if (response.data.code === 200) {
            showMessage({ message: res.message, status: res.code });
            return true;
        }

        showMessage({ message: res.message, status: res.code })
        return false;
        // return []

    } catch (error) {
        showMessage({ message: error })
        // return [];
    }

}

//delete a hall
export const deleteHallApi = async (id: string) => {
    console.log(id)
    let path = `/hall/${id}`


    let accessToken = getJwtToken()

    try {

        const response = await axios.delete(path, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        console.log(response)
        const res: responseInterface = response.data;

        if (res.code == 200) {
            showMessage({ message: res.message, status: res.code })
            return true;
        }


        showMessage({ message: response.data.message, status: res.code })
        return false

    } catch (error) {
        showMessage({ message: error })
        // return [];
    }

}