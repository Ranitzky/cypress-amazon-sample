import { Then } from 'cypress-cucumber-preprocessor/steps';

import { checkText } from './../steps/verification/checkText';
import { checkUrl } from './../steps/verification/checkUrl';
import { compareValue } from './../steps/verification/compareValue';

Then(
    /^Verify (class|data-component-type|data-index|id|tag|title|xpath) "([^"]*)?"( not)* with text "([^"]*)?"$/,
    checkText
);

Then(/^Verify url contains "([^"]*)?"$/, checkUrl);

Then(
    /^Verify value "([^"]*)?" is (less than|greater than|equal|not equal) value "([^"]*)?"$/,
    compareValue
);
