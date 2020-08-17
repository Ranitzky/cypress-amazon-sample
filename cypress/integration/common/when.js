import { When } from 'cypress-cucumber-preprocessor/steps';

import { click } from './../steps/action/click';
import { openPath } from './../steps/action/openPath';
import { typeInto } from './../steps/action/typeInto';

When(/^Click (class|data-component-type|tag|title|xpath) "([^"]*)?"$/, click);

When(/^Open path "([^"]*)?"$/, openPath);

When(/^Type "([^"]*)?" into input with (id|class) "([^"]*)?"$/, typeInto);
