import type { Meta, StoryObj } from "@storybook/react";
import { HealthCheckerComponent } from "./healthchecker";
import { HealthCheckerService } from "./index";
import { ApiChecker } from "./index";
import { HealthChecker, TWaxApiRequest, createHiveChain } from "@hiveio/wax/vite";

export type ExplorerNodeApi = {
  database_api: {
    get_reward_funds: TWaxApiRequest<{}, { funds: any[] }>;
    get_current_price_feed: TWaxApiRequest<{}, any>;
    find_vesting_delegations: TWaxApiRequest<
        { account: string },
        { delegations: any[] }
      >;
    get_witness_schedule: TWaxApiRequest<
        { id: number },
        any
      >;
    };
  rc_api: {
    list_rc_direct_delegations: TWaxApiRequest<
      { start: [string, string]; limit: number },
      { rc_direct_delegations: any[] }
    >;
  };
};

const chain = await createHiveChain();
const extendedHiveChain = chain
  ?.extend<ExplorerNodeApi>();

const healthChecker = new HealthChecker();

const apiCheckers: ApiChecker[] = [
  {
    title: "Reward Funds",
    method: extendedHiveChain?.api.database_api.get_reward_funds,
    params: {}, 
    validatorFunction: data => !!data.funds ? true : "Reward funds error",
  },
  {
    title: "Dynamic Global",
    method: extendedHiveChain?.api.database_api.get_dynamic_global_properties,
    params: {}, 
    validatorFunction: data => data.id === 0 ? true : "Dynamic global error",
  },
  {
    title: "Price Feed",
    method: extendedHiveChain?.api.database_api.get_current_price_feed,
    params: {}, 
    validatorFunction: data => !!data.base ? true : "Price feed error",
  },
  {
    title: "Witness Schedule",
    method: extendedHiveChain?.api.database_api.get_witness_schedule,
    params: { id: 1 }, 
    validatorFunction: data => /*data.max_scheduled_witnesses === 21*/ !!data ? true : "Witness schedule error",
    // This is left wrong on purpose for tests
  },
  {
    title: "Vesting Delegations",
    method: extendedHiveChain?.api.database_api.find_vesting_delegations,
    params: { account: "hiveio" }, 
    validatorFunction: data => !!data.delegations ? true : "Vesting delegations error",
  },
  {
    title: "RC Direct Delegations",
    method: extendedHiveChain?.api.rc_api.list_rc_direct_delegations,
    params: { start: ["hiveio", ""], limit: 1000 }, 
    validatorFunction: data => !!data.rc_direct_delegations ? true : "RC delegation error",
  }
]

const defaultProviders = [
  "https://api.hive.blog",
  "https://api.openhive.network",
  "https://anyx.io",
  "https://rpc.ausbit.dev",
  "https://rpc.mahdiyari.info",
  "https://techcoderx.com",
  "https://hive.roelandp.nl",
  "https://hived.emre.sh",
  "https://api.deathwing.me",
  "https://api.c0ff33a.uk",
  "https://hive-api.arcange.eu",
  "https://hive-api.3speak.tv",
  "https://hiveapi.actifit.io"
];

 const hcService = new HealthCheckerService(
  apiCheckers,
  defaultProviders,
  healthChecker,
  "https://api.hive.blog",
  () => {}
) 

const meta = {
  title: "Example/HealthChecker",
  component: HealthCheckerComponent,
  tags: ["docsPage"],
  argTypes: {
    healthCheckerService: {
      
    }
  },
} satisfies Meta<typeof HealthCheckerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    healthCheckerService: hcService
  },
};
