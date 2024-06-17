import helperFactory from '~/factory/helper';
import maskFactory from '~/factory/mask';
import hubspotFactory from '~/factory/hubspot';

export default (ctx, inject) => {
    inject('helper', helperFactory(ctx));
    inject('mask', maskFactory);
    inject('hubspot', hubspotFactory(ctx));
};
