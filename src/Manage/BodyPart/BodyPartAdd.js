import React from "react";

import { bodyPartPostAPI } from "../../API/API";

import classes from "../css/FormInput.module.css";
import { bodyPart_data } from "../../DataTypes/data-types";


/**
 * Basic elements : englishName, koreanName, description, marketURL, price, servings, id, flavor
 * BodyPart Type [Protien] : carbohydratePerServing, source, protienPerServing, fatPerServing
 * BodyPart Type [Gainer] : carbohydratePerServing, source, protienPerServing, fatPerServing
 * BodyPart Type [BCAA] : flavor
 */


/**
 * @param {*} props : onClose
 */
const BodyPartAdd = (props) => {

	const eNameRef = React.useRef("");
	const kNameRef = React.useRef("");

	/**
	 * Non-state var
	 */

	//handleBodyPartAdd

	/**
	 * Functions
	 */
	const initAllInputRefs = () => {
		eNameRef.current.value = "";
		kNameRef.current.value = "";
	}

	const appendFormData = (formData, bodyPartObj) => {
		Object.entries(bodyPartObj).map(([key, value]) => {
			formData.append(key, value);
		});
		return formData;
	}

	/**
	 * Handler
	*/
	const handleModalClose = (event) => {
		props.onClose();
	}

	const handleBodyPartSubmit = async (event) => {
		event.preventDefault();

		const bPart = {
			englishName: eNameRef.current.value,
			koreanName: kNameRef.current.value,
		};

		// https://velog.io/@shin6403/React-Form-Data-%EC%A0%84%EC%86%A1

		const response = await bodyPartPostAPI.post("", bPart);
		//정보 초기화
		initAllInputRefs();
	}

	/**
	 * useEffect
	 */

	/**
	 * Render
	 */

	//protien을 protein 으로 적었음..
	return (
		<div>
			<form className={classes.form} onSubmit={handleBodyPartSubmit}>
				<div className={classes.control}>
					<label htmlFor="englishName">englishName</label>
					<input type="text" id="engishName" placeholder="englishName" ref={eNameRef}></input>
				</div>
				<div className={classes.control}>
					<label htmlFor="koreanName">koreanName</label>
					<input type="text" id="koreanName" placeholder="koreanName" ref={kNameRef}></input>
				</div>
				<div>
					<button type="button" onClick={handleModalClose}>닫기</button>
					<button type="submit">추가</button>
				</div>
			</form>
		</div>
	);
};

export default BodyPartAdd;
