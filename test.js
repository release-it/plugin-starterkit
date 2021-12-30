const test = require('bron');
const assert = require('assert').strict;
const { factory, runTasks } = require('release-it/test/util');
const Plugin = require('.');

const namespace = 'my-plugin';

test('should not throw', async () => {
  const options = { [namespace]: {} };
  const plugin = factory(Plugin, { namespace, options });
  await assert.doesNotReject(runTasks(plugin));
});
