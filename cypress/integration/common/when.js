import { When } from 'cypress-cucumber-preprocessor/steps';

import { click } from './../steps/action/click';
import { openPath } from './../steps/action/openPath';
import { typeInto } from './../steps/action/typeInto';

When(/^Click class "([^"]*)?"$/, click);

When(/^Open path "([^"]*)?"$/, openPath);

When(/^Type "([^"]*)?" into input with (id|class) "([^"]*)?"$/, typeInto);
