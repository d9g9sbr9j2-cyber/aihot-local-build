// 净水行业分类、标签与品牌名录。
export const CATEGORIES = [
  { key: "market", tagColor: "orange", label: "市场", feedLabel: "市场与行业", section: "市场与行业", guide: "净水器及相关品类的市场规模、需求、渠道、价格带、供应链、行业标准和趋势。" },
  { key: "brand", tagColor: "turquoise", label: "品牌", feedLabel: "品牌与产品", section: "品牌与产品", guide: "重点品牌的新品、技术、渠道、营销、价格、经营动作和公开质量/售后信息。" },
  { key: "policy", tagColor: "red", label: "政策", feedLabel: "政策与合规", section: "政策与合规", guide: "监管、国家标准、抽检、召回、消费投诉、平台规则与质量合规要求。" },
  { key: "platform", tagColor: "purple", label: "平台", feedLabel: "平台经营", section: "平台经营", guide: "天猫、京东、拼多多、抖音电商的规则、大促、流量、资费和经营机会。" },
  { key: "consumer", tagColor: "green", label: "消费", feedLabel: "消费与选购", section: "消费与选购", guide: "真实消费需求、使用痛点、选购比较、公开价格变化和内容热点。" },
] as const satisfies ReadonlyArray<{ key: string; tagColor: string; label: string; feedLabel?: string; section: string; guide: string; commentary?: true }>;

export const RELEASE: { category: string; tag: string; unit: string } | null = { category: "brand", tag: "新品发布", unit: "款新品" };
export const PLAIN_TERMS: readonly string[] = ["净水器", "反渗透", "ro", "超滤", "前置过滤器", "管线机", "净饮机", "滤芯"];
export const ITEM_TYPES = ["product_launch", "price_promotion", "industry_event", "policy_update", "quality_alert", "platform_rule", "consumer_trend"] as const;

export const CATEGORY_TAGS = ["市场趋势", "新品发布", "品牌动态", "价格促销", "政策/监管", "质量/售后", "平台规则", "消费热点", "其他"] as const;
export const TOPIC_TAGS = ["前置过滤器", "超滤净水器", "反渗透净水器", "管线机", "台式净饮机", "花洒过滤器", "滤芯", "国标", "抽检/召回", "双11", "直播电商"] as const;
export const ENTITY_TAGS = ["美的", "海尔", "韦思卡尔", "安吉尔", "小米", "沁园", "奥克斯", "ACA北美电器", "碧云泉", "天猫", "京东", "拼多多", "抖音电商"] as const;

export const TAG_SYNONYMS: Readonly<Record<string, string>> = {
  "ro": "反渗透净水器", "反渗透": "反渗透净水器", "净水机": "反渗透净水器", "前置": "前置过滤器",
  "台式净水器": "台式净饮机", "台式饮水机": "台式净饮机", "花洒净水": "花洒过滤器",
  "新品": "新品发布", "上新": "新品发布", "活动": "价格促销", "大促": "价格促销",
  "政策": "政策/监管", "监管": "政策/监管", "抽检": "质量/售后", "召回": "质量/售后", "投诉": "质量/售后",
  "规则": "平台规则", "平台": "平台规则", "趋势": "市场趋势", "消费": "消费热点",
};

export const ENTITIES: Record<string, { name: string; displayTag: string | null; aliases: string[]; orgNames?: string[]; otherNames?: string[] }> = {
  midea: { name: "美的", displayTag: "美的", aliases: ["美的", "Midea"] },
  haier: { name: "海尔", displayTag: "海尔", aliases: ["海尔", "Haier"] },
  weskar: { name: "韦思卡尔", displayTag: "韦思卡尔", aliases: ["韦思卡尔", "Weskar"] },
  angel: { name: "安吉尔", displayTag: "安吉尔", aliases: ["安吉尔", "Angel"] },
  xiaomi: { name: "小米", displayTag: "小米", aliases: ["小米", "Xiaomi", "米家"] },
  qinyuan: { name: "沁园", displayTag: "沁园", aliases: ["沁园", "Qinyuan"] },
  aux: { name: "奥克斯", displayTag: "奥克斯", aliases: ["奥克斯", "AUX"] },
  aca: { name: "ACA北美电器", displayTag: "ACA北美电器", aliases: ["ACA", "北美电器", "ACA北美电器"] },
  beverly: { name: "碧云泉", displayTag: "碧云泉", aliases: ["碧云泉", "Beverly"] },
};

export const IDENTITY_LEXICON: ReadonlyArray<{ id: string; name: string; patterns: RegExp[] }> = Object.entries(ENTITIES).map(([id, entity]) => ({ id, name: entity.name, patterns: entity.aliases.map((alias) => new RegExp(alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i")) }));
export const PUBLISHER_DOMAINS: ReadonlyArray<{ entityId: string; domains: readonly string[] }> = [];
export const IDENTITY_CONTEXT_ALIASES: ReadonlyArray<{ entityId: string; pattern: RegExp }> = [];
