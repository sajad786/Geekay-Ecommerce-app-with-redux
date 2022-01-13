import * as validator from 'is_js';
import FlashMessage from 'react-native-flash-message';

const checkEmpty = (val, key) => {
  if (validator.empty(val.trim())) {
    return `${key}`;
  } else {
    return '';
  }
};

const checkMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return `please enter valid ${key}`;
  } else {
    return '';
  }
};

const checkMinMaxLength = (val, minLength, maxLength, key) => {
  if (val.trim().length >= minLength && val.trim().length < maxLength ) {
     return ''
  } else {
         return `please enter valid ${key}`;
  }
};

export default function (data) {
  const {name, email, password, phone} = data;

  if (name != undefined) {
    let emptyValidationText = checkEmpty(name, 'please enter userName');
    if (emptyValidationText != '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(name, 3, 'name');
      if (minLengthValidation != '') {
        return minLengthValidation;
      }
    }
  }

  if (email != undefined) {
    let emptyValidationText = checkEmpty(email, 'please enter email');
    if (emptyValidationText != '') {
      return emptyValidationText;
    } else {
      if (!validator.email(email)) {
        return 'please enter valid email';
      }
    }
  }

  if (password != undefined) {
    let emptyValidationText = checkEmpty(password, 'please enter password');
    if (emptyValidationText != '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(password, 6, 'password');
      if (minLengthValidation != '') {
        return minLengthValidation;
      }
    }
  }

  if (phone != undefined) {
    let emptyValidationText = checkEmpty(phone, 'please enter phoneNumber');
    if (emptyValidationText != '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinMaxLength(phone, 10, 12, 'phoneNumber');
      if (minLengthValidation != '') {
        return minLengthValidation;
      }
    }
  }
}
