import { render } from "@testing-library/react";
import initStoryshotsAddon from "@storybook/addon-storyshots";
import type { StoryshotsOptions } from "@storybook/addon-storyshots/dist/ts3.9/api/StoryshotsOptions";

const reactTestingLibrarySerializer = {
    print: (val, serialize, indent) => serialize(val.asFragment()),
    test: (val) => val && val.hasOwnProperty("container"),
};

export function initStoryshots(config: StoryshotsOptions) {
    initStoryshotsAddon({
        ...config,
        renderer: render,
        snapshotSerializers: [reactTestingLibrarySerializer],
    });
}
