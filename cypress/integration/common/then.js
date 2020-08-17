import { Then } from 'cypress-cucumber-preprocessor/steps';

import { checkText } from './../steps/verification/checkText';
import { checkUrl } from './../steps/verification/checkUrl';

Then(
    /^Verify (class|data-component-type|tag|title|xpath) "([^"]*)?"( not)* with text "([^"]*)?"$/,
    checkText
);

Then(/^Verify url contains "([^"]*)?"$/, checkUrl);
