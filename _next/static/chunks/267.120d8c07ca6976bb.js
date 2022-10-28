"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{60267:function(t,e,r){r.r(e),r.d(e,{Pack:function(){return v}});var a=r(2508),s=r(10317),n=r(1604),o=r(9279),c=r(35553),d=r(2593);r(41323),r(25025),r(70332),r(8455),r(26729),r(54098),r(62555),r(26219),r(61303),r(49242),r(94317),r(13670),r(79120),r(97604),r(8187),r(19362),r(54730),r(36250),r(85725),r(38730),r(237),r(65609),r(77208),r(86841),r(49561),r(40553),r(26),r(69392),r(62822),r(24234),r(82037),r(2162),r(64063),r(34161),r(50266),r(98839),r(51375),r(43320),r(65815),r(59189),r(40721),r(24601),r(46878),r(20583),r(92355),r(84194),r(51121),r(32484),r(78435);let i=n.z.object({contractAddress:s.cC}),p=i.extend({quantity:s.cD}),l=i.extend({tokenId:s.cE}),h=i.extend({tokenId:s.cE,quantity:s.cE}),u=p.omit({quantity:!0}).extend({quantityPerReward:s.cD}),w=h.omit({quantity:!0}).extend({quantityPerReward:s.cE}),g=u.extend({totalRewards:s.cE.default("1")}),k=w.extend({totalRewards:s.cE.default("1")});n.z.object({erc20Rewards:n.z.array(u).default([]),erc721Rewards:n.z.array(l).default([]),erc1155Rewards:n.z.array(w).default([])});let f=n.z.object({erc20Rewards:n.z.array(g).default([]),erc721Rewards:n.z.array(l).default([]),erc1155Rewards:n.z.array(k).default([])}),A=f.extend({packMetadata:a.N,rewardsPerPack:s.cE.default("1"),openStartTime:s.cF.default(new Date)});class v extends s.aM{constructor(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.cm(t,e,o,n.gasless&&"openzeppelin"in n.gasless?{...n,gasless:{openzeppelin:{...n.gasless.openzeppelin,useEOAForwarder:!0}}}:n);super(d,r,c),(0,a._)(this,"abi",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"interceptor",void 0),(0,a._)(this,"erc1155",void 0),(0,a._)(this,"owner",void 0),this.abi=o,this.erc1155=new s.aF(this.contractWrapper,this.storage,c),this.metadata=new s.ag(this.contractWrapper,s.cG,this.storage),this.roles=new s.ah(this.contractWrapper,v.contractRoles),this.royalties=new s.ai(this.contractWrapper,this.metadata),this.encoder=new s.af(this.contractWrapper),this.estimator=new s.aQ(this.contractWrapper),this.events=new s.aR(this.contractWrapper),this.interceptor=new s.aS(this.contractWrapper),this.owner=new s.aV(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,s.br)("transfer"),o.d);return!t}async getPackContents(t){let{contents:e,perUnitAmounts:r}=await this.contractWrapper.readContract.getPackContents(t),a=[],n=[],o=[];for(let i=0;i<e.length;i++){let p=e[i],l=r[i];switch(p.tokenType){case 0:{let h=await (0,s.ct)(this.contractWrapper.getProvider(),p.assetContract),u=c.formatUnits(p.totalAmount,h.decimals);a.push({contractAddress:p.assetContract,quantityPerReward:l.toString(),totalRewards:d.O$.from(u).div(l).toString()});break}case 1:n.push({contractAddress:p.assetContract,tokenId:p.tokenId.toString()});break;case 2:o.push({contractAddress:p.assetContract,tokenId:p.tokenId.toString(),quantityPerReward:l.toString(),totalRewards:d.O$.from(p.totalAmount).div(l).toString()})}}return{erc20Rewards:a,erc721Rewards:n,erc1155Rewards:o}}async create(t){let e=await this.contractWrapper.getSignerAddress();return this.createTo(e,t)}async addPackContents(t,e){let r=await this.contractWrapper.getSignerAddress(),a=f.parse(e),{contents:s,numOfRewardUnits:n}=await this.toPackContentArgs(a),o=await this.contractWrapper.sendTransaction("addPackContents",[t,s,n,r]),c=this.contractWrapper.parseLogs("PackUpdated",null==o?void 0:o.logs);if(0===c.length)throw Error("PackUpdated event not found");let d=c[0].args.packId;return{id:d,receipt:o,data:()=>this.erc1155.get(d)}}async createTo(t,e){let r=await (0,s.cu)(e.packMetadata,this.storage),a=A.parse(e),{erc20Rewards:n,erc721Rewards:o,erc1155Rewards:c}=a,{contents:d,numOfRewardUnits:i}=await this.toPackContentArgs({erc20Rewards:n,erc721Rewards:o,erc1155Rewards:c}),p=await this.contractWrapper.sendTransaction("createPack",[d,i,r,a.openStartTime,a.rewardsPerPack,t]),l=this.contractWrapper.parseLogs("PackCreated",null==p?void 0:p.logs);if(0===l.length)throw Error("PackCreated event not found");let h=l[0].args.packId;return{id:h,receipt:p,data:()=>this.erc1155.get(h)}}async open(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=await this.contractWrapper.sendTransaction("openPack",[t,e]),a=this.contractWrapper.parseLogs("PackOpened",null==r?void 0:r.logs);if(0===a.length)throw Error("PackOpened event not found");let n=a[0].args.rewardUnitsDistributed,o=[],d=[],i=[];for(let p of n)switch(p.tokenType){case 0:{let l=await (0,s.ct)(this.contractWrapper.getProvider(),p.assetContract);o.push({contractAddress:p.assetContract,quantityPerReward:c.formatUnits(p.totalAmount,l.decimals).toString()});break}case 1:d.push({contractAddress:p.assetContract,tokenId:p.tokenId.toString()});break;case 2:i.push({contractAddress:p.assetContract,tokenId:p.tokenId.toString(),quantityPerReward:p.totalAmount.toString()})}return{erc20Rewards:o,erc721Rewards:d,erc1155Rewards:i}}async toPackContentArgs(t){let e=[],r=[],{erc20Rewards:a,erc721Rewards:n,erc1155Rewards:o}=t,c=this.contractWrapper.getProvider(),i=await this.contractWrapper.getSignerAddress();for(let p of a){let l=await (0,s.cv)(c,p.quantityPerReward,p.contractAddress),h=l.mul(p.totalRewards),u=await (0,s.cw)(this.contractWrapper,p.contractAddress,h);if(!u)throw Error(`ERC20 token with contract address "${p.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${p.contractAddress}").setAllowance("${this.getAddress()}", ${h});

`);r.push(p.totalRewards),e.push({assetContract:p.contractAddress,tokenType:0,totalAmount:h,tokenId:0})}for(let w of n){let g=await (0,s.cx)(this.contractWrapper.getProvider(),this.getAddress(),w.contractAddress,w.tokenId,i);if(!g)throw Error(`ERC721 token "${w.tokenId}" with contract address "${w.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${w.contractAddress}").setApprovalForToken("${this.getAddress()}", ${w.tokenId});

`);r.push("1"),e.push({assetContract:w.contractAddress,tokenType:1,totalAmount:1,tokenId:w.tokenId})}for(let k of o){let f=await (0,s.cx)(this.contractWrapper.getProvider(),this.getAddress(),k.contractAddress,k.tokenId,i);if(!f)throw Error(`ERC1155 token "${k.tokenId}" with contract address "${k.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${k.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);r.push(k.totalRewards),e.push({assetContract:k.contractAddress,tokenType:2,totalAmount:d.O$.from(k.quantityPerReward).mul(d.O$.from(k.totalRewards)),tokenId:k.tokenId})}return{contents:e,numOfRewardUnits:r}}async call(t){for(var e=arguments.length,r=Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return this.contractWrapper.call(t,...r)}}(0,a._)(v,"contractRoles",["admin","minter","asset","transfer"])}}]);