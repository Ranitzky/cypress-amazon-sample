import { Then } from 'cypress-cucumber-preprocessor/steps';

import { checkText } from './../steps/verification/checkText';

Then(/^Verify class "([^"]*)?"( not)* with text "([^"]*)?"$/, checkText);
