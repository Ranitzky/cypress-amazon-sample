import { Then } from 'cypress-cucumber-preprocessor/steps';

import { checkText } from './../steps/verification/checkText';

Then(
    /^Verify (class|data-component-type|tag|title|xpath) "([^"]*)?"( not)* with text "([^"]*)?"$/,
    checkText
);
