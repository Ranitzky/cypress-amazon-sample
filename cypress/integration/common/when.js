import { When } from 'cypress-cucumber-preprocessor/steps';

import { calcValue } from './../steps/action/calcValue';
import { click } from './../steps/action/click';
import { openPath } from './../steps/action/openPath';
import { typeInto } from './../steps/action/typeInto';
import { storeValue } from './../steps/action/storeValue';

When(
    /^Calculate "([^"]*)?" (plus|minus|multiply by|divide by) "([^"]*)?" as "([^"]*)?"$/,
    calcValue
);

When(
    /^Click (class|data-component-type|data-index|tag|title|xpath) "([^"]*)?"$/,
    click
);

When(/^Open path "([^"]*)?"$/, openPath);

When(/^Type "([^"]*)?" into input with (id|class) "([^"]*)?"$/, typeInto);

When(
    /^Store (class|data-component-type|data-index|tag|title|xpath) "([^"]*)?" as "([^"]*)?"$/,
    storeValue
);
