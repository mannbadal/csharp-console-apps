const allTests = [
  {
    level: 30,
    levelLabel: "info",
    time: 1736820482294,
    pid: 8,
    hostname: "169.254.192.106",
    serviceName: "networkEnquiryResponseReceiver",
    systemName: "network",
    environment: "test2",
    context: "NetworkEnquiryResponseReceiverController",
    awsRequestId: "9d7dea19-e680-578c-addc-b5e62fb2a889",
    "x-invoke-id": "5c42d962-2305-4afc-b3c6-6c0200bf5ae8",
    baggage: {},
    "x-correlation-id": "9d7dea19-e680-578c-addc-b5e62fb2a889",
    "x-correlation-trace-id":
      "Root=1-6785c6ff-f9b2eadd98d7c7f85783cf0a;Parent=368e61f6113eaf9b;Sampled=0;Lineage=1:38b32d7e:0",
    message: {
      id: "d1d4b960-82f9-42b6-8815-802f920d93f9",
      type: "ontFullStatus",
      context: {
        piid: "UFF000005129284",
        request: { piid: "UFF000005129284" },
      },
      authorisation: {
        partyIds: ["PTY000000001460"],
        scopes: ["diagnostics", "products:read"],
      },
      baggage: {
        traceId: "d1d4b960-82f9-42b6-8815-802f920d93f9",
        whenEnqueued: "2024-11-04T14:54:32.287+13:00",
        "x-invocation-id": "d5db2e39-a763-4949-a779-7d03702a642e",
        whenApiCompleted: "2024-11-04T14:54:32.287+13:00",
        requestUserId: "0oapyx1vzV496P9721d6",
        whenNemReceived: "2025-01-14T15:07:52.4614979+13:00",
        whenNemCompleted: "2025-01-14T15:07:59.5021458+13:00",
      },
      results: [
        {
          id: "OntDevice",
          requestStartTime: "2025-01-14T15:07:52.4680953+13:00",
          requestCompleteTime: "2025-01-14T15:07:52.5571737+13:00",
          response: {
            device: [
              {
                "device-name": "ELPS-FIX",
                state: "deployed",
                "profile-vector-name": "ONU_Profile_Vector",
                "object-parameters": {
                  "onu-id": 2,
                  "serial-number": "HWTCD6EE21AA",
                },
                metadata: {
                  inventory: {
                    "software-rev": "V5R021C00S130",
                    "serial-num": "HWTCD6EE21AA",
                    "clei-code": "HG8240H5",
                  },
                },
              },
            ],
          },
          requestDurationMs: 89,
        },
        {
          id: "OltInterface",
          parameter: "ELPS-FIX",
          requestStartTime: "2025-01-14T15:07:52.5576137+13:00",
          requestCompleteTime: "2025-01-14T15:07:52.645316+13:00",
          response: {
            interface: [
              {
                "subtended-device-names": ["HG8240H5-21AA", "ELPS-FIX"],
                "device-name": "UFFLAOLTLABA41",
                "interface-type": "gpon",
                "interface-name": "UFFLAOLTLABA41-6",
                "interface-id": "gpon 0/6",
                state: "deployed",
                "bundle-name": "UFFLAOLTLABA41-6",
              },
            ],
          },
          requestDurationMs: 88,
        },
        {
          id: "OntDeviceInspection",
          parameter: "ELPS-FIX",
          requestStartTime: "2025-01-14T15:07:52.6454377+13:00",
          requestCompleteTime: "2025-01-14T15:07:53.0497658+13:00",
          response: {
            "single-slot-device": {
              onu: {
                uptime: 0,
                uplink: {
                  transceiver: {
                    "tx-power": 0,
                    "rx-power": 0,
                    "fiber-distance": 0,
                  },
                },
              },
            },
            status: { online: false },
          },
          requestDurationMs: 404,
        },
        {
          id: "OntServices",
          requestStartTime: "2025-01-14T15:07:53.0506712+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.1005226+13:00",
          response: {
            output: { service: ["ELPS-FIX-ACS", "ELPS-FIX-BS2a", "TEST-ATA"] },
          },
          requestDurationMs: 1050,
        },
        {
          id: "OntServiceDetails",
          requestStartTime: "2025-01-14T15:07:54.1023834+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.1728678+13:00",
          response: {
            services: {
              service: [
                {
                  "service-id": "ELPS-FIX-ACS",
                  state: "deployed",
                  "profile-name": "Voice Management Service",
                  "service-state": "in-service",
                  "uplink-endpoint": {
                    "interface-endpoint": {
                      "outer-tag-vlan-id": 3654,
                      "inner-tag-vlan-id": "none",
                      "content-provider-name": "ACS-Handover",
                    },
                  },
                  "downlink-endpoint": {
                    "interface-endpoint": {
                      "outer-tag-vlan-id": "any",
                      "inner-tag-vlan-id": "none",
                      "interface-name": "ELPS-FIX-VEIP",
                    },
                  },
                  "object-parameters": {},
                },
                {
                  "service-id": "ELPS-FIX-BS2a",
                  state: "deployed",
                  "service-type": "static-ip-service",
                  "profile-name": "BS2a_Service_Vector",
                  "service-state": "in-service",
                  "uplink-endpoint": {
                    "interface-endpoint": {
                      "outer-tag-vlan-id": 55,
                      "inner-tag-vlan-id": 564,
                      "content-provider-name": "UFF000004012941-HIG-SLO",
                    },
                  },
                  "downlink-endpoint": {
                    "interface-endpoint": {
                      "outer-tag-vlan-id": 10,
                      "inner-tag-vlan-id": "none",
                      "interface-name": "ELPS-FIX-ETH1",
                    },
                  },
                  "object-parameters": {},
                },
                {
                  "service-id": "TEST-ATA",
                  state: "deployed",
                  "service-type": "voice-sip-service",
                  "profile-name": "Voice Data Service",
                  "service-state": "in-service",
                  "uplink-endpoint": {
                    "interface-endpoint": {
                      "outer-tag-vlan-id": 22,
                      "inner-tag-vlan-id": 2,
                      "content-provider-name": "UFF000004012941-HIG-SLO",
                    },
                  },
                  "downlink-endpoint": {
                    "interface-endpoint": {
                      "outer-tag-vlan-id": "any",
                      "inner-tag-vlan-id": "none",
                      "interface-name": "ELPS-FIX-VEIP",
                    },
                  },
                  "object-parameters": { "sip-identity": "TEMPORARY VALUE" },
                },
              ],
            },
          },
          requestDurationMs: 70,
        },
        {
          id: "ContentProvider",
          parameter: "ACS-Handover",
          requestStartTime: "2025-01-14T15:07:54.1886941+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.2132654+13:00",
          response: {
            "bundle-name": "ACS-Handover",
            state: "deployed",
            "content-provider-name": "ACS-Handover",
            "profile-vector-name": "",
          },
          requestDurationMs: 25,
        },
        {
          id: "Bundle",
          parameter: "ACS-Handover",
          requestStartTime: "2025-01-14T15:07:54.2182659+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.2461683+13:00",
          response: {},
          requestDurationMs: 28,
        },
        {
          id: "BundleLagGroups",
          parameter: "ACS-Handover",
          requestStartTime: "2025-01-14T15:07:54.2480736+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.3343373+13:00",
          response: [
            {
              "device-name": "UFFLALEFLABA41",
              state: "deployed",
              "interface-name": "ACS-Handover.LEFA41",
              "interface-id": "lag 0/47",
              "profile-vector-name": "Leaf_Uplink_LAG_Profile_Vector",
              PortChannel: 47,
            },
            {
              "device-name": "UFFLALEFLABA42",
              state: "deployed",
              "interface-name": "ACS-Handover.LEFA42",
              "interface-id": "lag 0/47",
              "profile-vector-name": "Leaf_Uplink_LAG_Profile_Vector",
              PortChannel: 47,
            },
          ],
          requestDurationMs: 86,
        },
        {
          id: "LagGroupMembers",
          parameter: "UFFLALEFLABA41/47",
          requestStartTime: "2025-01-14T15:07:54.3409217+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.4770787+13:00",
          response: {
            output: {
              data: {
                interfaces: [
                  {
                    name: "port-channel 47",
                    description: "ACS-Handover.LEFA41",
                    type: "ianaift:ieee8023adLag",
                    lag: {
                      "dynamic-interface-assignment": true,
                      "static-interface-assignment": false,
                      "mc-lag": true,
                      interface: null,
                      lacp: { aggregator: { actor: { "admin-key": 47 } } },
                    },
                  },
                ],
              },
            },
          },
          requestDurationMs: 137,
        },
        {
          id: "DynamicLagGroupMembers",
          parameter: "UFFLALEFLABA41/47",
          requestStartTime: "2025-01-14T15:07:54.4842388+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.5789204+13:00",
          response: {
            output: {
              data: {
                interfaces: [
                  {
                    name: "ethernet 0/47:1",
                    description: "ACS-Handover-1",
                    type: "ianaift:ethernetCsmacd",
                    lag: {
                      "dynamic-interface-assignment": null,
                      "static-interface-assignment": null,
                      interface: null,
                      lacp: {
                        aggregator: null,
                        port: { actor: { "admin-key": 47 } },
                      },
                      "mc-lag": null,
                      "expected-interface-speed": null,
                    },
                  },
                ],
              },
            },
          },
          requestDurationMs: 94,
        },
        {
          id: "LagGroupMembers",
          parameter: "UFFLALEFLABA42/47",
          requestStartTime: "2025-01-14T15:07:54.5806798+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.6280438+13:00",
          response: {
            output: {
              data: {
                interfaces: [
                  {
                    name: "port-channel 47",
                    description: "ACS-Handover.LEFA42",
                    type: "ianaift:ieee8023adLag",
                    lag: {
                      "dynamic-interface-assignment": true,
                      "static-interface-assignment": false,
                      "mc-lag": true,
                      interface: null,
                      lacp: { aggregator: { actor: { "admin-key": 47 } } },
                    },
                  },
                ],
              },
            },
          },
          requestDurationMs: 48,
        },
        {
          id: "DynamicLagGroupMembers",
          parameter: "UFFLALEFLABA42/47",
          requestStartTime: "2025-01-14T15:07:54.6282459+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.785657+13:00",
          response: {
            output: {
              data: {
                interfaces: [
                  {
                    name: "ethernet 0/47:1",
                    description: "ACS-Handover-2",
                    type: "ianaift:ethernetCsmacd",
                    lag: {
                      "dynamic-interface-assignment": null,
                      "static-interface-assignment": null,
                      interface: null,
                      lacp: {
                        aggregator: null,
                        port: { actor: { "admin-key": 47 } },
                      },
                      "mc-lag": null,
                      "expected-interface-speed": null,
                    },
                  },
                ],
              },
            },
          },
          requestDurationMs: 157,
        },
        {
          id: "ContentProvider",
          parameter: "UFF000004012941-HIG-SLO",
          requestStartTime: "2025-01-14T15:07:54.7859668+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.8086636+13:00",
          response: {
            "bundle-name": "UFF000004012941-HIG-SLO",
            state: "deployed",
            "content-provider-name": "UFF000004012941-HIG-SLO",
            "profile-vector-name": "",
          },
          requestDurationMs: 23,
        },
        {
          id: "Bundle",
          parameter: "UFF000004012941-HIG-SLO",
          requestStartTime: "2025-01-14T15:07:54.8088048+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.8266647+13:00",
          response: {},
          requestDurationMs: 18,
        },
        {
          id: "BundleLagGroups",
          parameter: "UFF000004012941-HIG-SLO",
          requestStartTime: "2025-01-14T15:07:54.8267797+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.914432+13:00",
          response: [
            {
              "device-name": "UFFLALEFLABA41",
              state: "deployed",
              "interface-name": "UFF000004012941-HIG-SLO.LEFA13",
              "interface-id": "lag 0/43",
              "profile-vector-name": "Leaf_Uplink_Static_LAG_Profile_Vector",
              PortChannel: 43,
            },
            {
              "device-name": "UFFLALEFLABA42",
              state: "deployed",
              "interface-name": "UFF000004012941-HIG-SLO.LEFA14",
              "interface-id": "lag 0/43",
              "profile-vector-name": "Leaf_Uplink_LAG_Profile_Vector",
              PortChannel: 43,
            },
          ],
          requestDurationMs: 88,
        },
        {
          id: "LagGroupMembers",
          parameter: "UFFLALEFLABA41/43",
          requestStartTime: "2025-01-14T15:07:54.9146607+13:00",
          requestCompleteTime: "2025-01-14T15:07:54.9922129+13:00",
          response: {
            output: {
              data: {
                interfaces: [
                  {
                    name: "port-channel 43",
                    description: "UFF000004012941-HIG-SLO.LEFA13",
                    type: "ianaift:ieee8023adLag",
                    lag: {
                      "dynamic-interface-assignment": false,
                      "static-interface-assignment": true,
                      "mc-lag": true,
                      interface: "ethernet 0/43:1",
                      lacp: null,
                    },
                  },
                ],
              },
            },
          },
          requestDurationMs: 78,
        },
        {
          id: "StaticLagInterface",
          parameter: "UFFLALEFLABA41/ethernet 0/43:1",
          requestStartTime: "2025-01-14T15:07:54.9933216+13:00",
          requestCompleteTime: "2025-01-14T15:07:55.0857017+13:00",
          response: {
            interface: [
              {
                "interface-type": "ethernet",
                "interface-id": "ethernet 0/43:1",
                "interface-name": "UFF000007485629-HOP-SLO",
                "device-name": "UFFLALEFLABA41",
                "profile-vector-name":
                  "Leaf_Uplink_No_LACP_Ethernet_Interface_Vector",
              },
            ],
          },
          requestDurationMs: 92,
        },
        {
          id: "LagGroupMembers",
          parameter: "UFFLALEFLABA42/43",
          requestStartTime: "2025-01-14T15:07:55.0871889+13:00",
          requestCompleteTime: "2025-01-14T15:07:55.1982332+13:00",
          response: {
            output: {
              data: {
                interfaces: [
                  {
                    name: "port-channel 43",
                    description: "UFF000004012941-HIG-SLO.LEFA14",
                    type: "ianaift:ieee8023adLag",
                    lag: {
                      "dynamic-interface-assignment": true,
                      "static-interface-assignment": false,
                      "mc-lag": true,
                      interface: null,
                      lacp: { aggregator: { actor: { "admin-key": 43 } } },
                    },
                  },
                ],
              },
            },
          },
          requestDurationMs: 111,
        },
        {
          id: "DynamicLagGroupMembers",
          parameter: "UFFLALEFLABA42/43",
          requestStartTime: "2025-01-14T15:07:55.1984281+13:00",
          requestCompleteTime: "2025-01-14T15:07:55.2864236+13:00",
          response: { output: { data: { interfaces: [] } } },
          requestDurationMs: 88,
        },
        {
          id: "OntInterfaces",
          requestStartTime: "2025-01-14T15:07:55.2869479+13:00",
          requestCompleteTime: "2025-01-14T15:07:55.3807386+13:00",
          response: {
            interface: [
              {
                "device-name": "ELPS-FIX",
                "interface-type": "ethernet",
                state: "deployed",
                "interface-name": "ELPS-FIX-ETH1",
                metadata: {
                  "device-scoped-interface-name": [
                    "UFFLAOLTLABA41:onu-subscr-if-6.0.2.0.eth.1.phy",
                  ],
                },
              },
              {
                "device-name": "ELPS-FIX",
                "interface-type": "ethernet",
                state: "deployed",
                "interface-name": "ELPS-FIX-ETH2",
                metadata: {
                  "device-scoped-interface-name": [
                    "UFFLAOLTLABA41:onu-subscr-if-6.0.2.0.eth.2.phy",
                  ],
                },
              },
              {
                "device-name": "ELPS-FIX",
                "interface-type": "fxs",
                state: "deployed",
                "interface-name": "ELPS-FIX-FXS1",
                metadata: {
                  "device-scoped-interface-name": [
                    "UFFLAOLTLABA41:onu-subscr-if-6.0.2.0.fxs.1.phy",
                  ],
                },
              },
              {
                "device-name": "ELPS-FIX",
                "interface-type": "ip",
                state: "deployed",
                "interface-name": "ELPS-FIX-TR069",
                metadata: {
                  "device-scoped-interface-name": [
                    "UFFLAOLTLABA41:onu-subscr-if-6.0.2.0.ip.1",
                  ],
                },
              },
              {
                "device-name": "ELPS-FIX",
                "interface-type": "virtual-ethernet",
                state: "deployed",
                "interface-name": "ELPS-FIX-VEIP",
                metadata: {
                  "device-scoped-interface-name": [
                    "UFFLAOLTLABA41:onu-subscr-if-6.0.2.0.veip.1",
                  ],
                  "tr069-profile": "ACS TR069 Profile",
                },
              },
            ],
          },
          requestDurationMs: 94,
        },
        {
          id: "OntInterfaceState",
          parameter: "ELPS-FIX-ETH1",
          requestStartTime: "2025-01-14T15:07:55.3830197+13:00",
          requestCompleteTime: "2025-01-14T15:07:55.6890348+13:00",
          response: {
            "oper-status": "down",
            "admin-status": "up",
            ethernet: {
              "loopback-enable": false,
              "auto-negotiated": false,
              "actual-duplex": "unknown",
              "actual-speed": 0,
            },
          },
          requestDurationMs: 306,
        },
        {
          id: "OntInterfaceStatistics",
          parameter: "ELPS-FIX-ETH1",
          requestStartTime: "2025-01-14T15:07:55.6917142+13:00",
          requestCompleteTime: "2025-01-14T15:07:56.0799529+13:00",
          response: {
            "time-stamp": null,
            "in-broadcast-frames": null,
            "out-broadcast-frames": null,
            "in-multicast-frames": null,
            "out-multicast-frames": null,
            "in-frames": null,
            "out-frames": null,
            "in-errors": null,
            "out-errors": null,
            "in-discards": null,
            "out-discards": null,
            "in-octets": null,
            "out-octets": null,
            "in-error-undersize-frames": null,
            "in-error-oversize-frames": null,
            "in-error-fcs-frames": null,
          },
          requestDurationMs: 388,
        },
        {
          id: "OntInterfacePerformance",
          parameter: "ELPS-FIX-ETH1",
          requestStartTime: "2025-01-14T15:07:56.0828355+13:00",
          requestCompleteTime: "2025-01-14T15:07:56.4686231+13:00",
          response: {
            "intervals-15-minute": {
              current: {
                "time-stamp": "2025-01-14T02:00:00+00:00",
                "in-broadcast-frames": "0",
                "out-broadcast-frames": "0",
                "in-multicast-frames": "0",
                "out-multicast-frames": "0",
                "in-frames": "0",
                "out-frames": "0",
                "in-errors": "0",
                "out-errors": "0",
                "in-octets": "0",
                "out-octets": "0",
                "in-error-undersize-frames": "0",
                "in-error-oversize-frames": "0",
                "in-error-fcs-frames": "0",
              },
              previous: {
                "time-stamp": null,
                "in-broadcast-frames": null,
                "out-broadcast-frames": null,
                "in-multicast-frames": null,
                "out-multicast-frames": null,
                "in-frames": null,
                "out-frames": null,
                "in-errors": null,
                "out-errors": null,
                "in-octets": null,
                "out-octets": null,
                "in-error-undersize-frames": null,
                "in-error-oversize-frames": null,
                "in-error-fcs-frames": null,
              },
            },
          },
          requestDurationMs: 386,
        },
        {
          id: "OntInterfaceState",
          parameter: "ELPS-FIX-ETH2",
          requestStartTime: "2025-01-14T15:07:56.4712644+13:00",
          requestCompleteTime: "2025-01-14T15:07:56.6837079+13:00",
          response: {
            "oper-status": "down",
            "admin-status": "up",
            ethernet: {
              "loopback-enable": false,
              "auto-negotiated": false,
              "actual-duplex": "unknown",
              "actual-speed": 0,
            },
          },
          requestDurationMs: 212,
        },
        {
          id: "OntInterfaceStatistics",
          parameter: "ELPS-FIX-ETH2",
          requestStartTime: "2025-01-14T15:07:56.6837962+13:00",
          requestCompleteTime: "2025-01-14T15:07:56.986122+13:00",
          response: {
            "time-stamp": null,
            "in-broadcast-frames": null,
            "out-broadcast-frames": null,
            "in-multicast-frames": null,
            "out-multicast-frames": null,
            "in-frames": null,
            "out-frames": null,
            "in-errors": null,
            "out-errors": null,
            "in-discards": null,
            "out-discards": null,
            "in-octets": null,
            "out-octets": null,
            "in-error-undersize-frames": null,
            "in-error-oversize-frames": null,
            "in-error-fcs-frames": null,
          },
          requestDurationMs: 303,
        },
        {
          id: "OntInterfacePerformance",
          parameter: "ELPS-FIX-ETH2",
          requestStartTime: "2025-01-14T15:07:56.9861766+13:00",
          requestCompleteTime: "2025-01-14T15:07:57.2376745+13:00",
          response: {
            "intervals-15-minute": {
              current: {
                "time-stamp": "2025-01-14T02:00:00+00:00",
                "in-broadcast-frames": "0",
                "out-broadcast-frames": "0",
                "in-multicast-frames": "0",
                "out-multicast-frames": "0",
                "in-frames": "0",
                "out-frames": "0",
                "in-errors": "0",
                "out-errors": "0",
                "in-octets": "0",
                "out-octets": "0",
                "in-error-undersize-frames": "0",
                "in-error-oversize-frames": "0",
                "in-error-fcs-frames": "0",
              },
              previous: {
                "time-stamp": null,
                "in-broadcast-frames": null,
                "out-broadcast-frames": null,
                "in-multicast-frames": null,
                "out-multicast-frames": null,
                "in-frames": null,
                "out-frames": null,
                "in-errors": null,
                "out-errors": null,
                "in-octets": null,
                "out-octets": null,
                "in-error-undersize-frames": null,
                "in-error-oversize-frames": null,
                "in-error-fcs-frames": null,
              },
            },
          },
          requestDurationMs: 251,
        },
        {
          id: "OntInterfaceState",
          parameter: "ELPS-FIX-FXS1",
          requestStartTime: "2025-01-14T15:07:57.2377521+13:00",
          requestCompleteTime: "2025-01-14T15:07:57.4571146+13:00",
          response: {
            "oper-status": "down",
            "admin-status": "up",
            ethernet: null,
          },
          requestDurationMs: 220,
        },
        {
          id: "OntInterfaceStatistics",
          parameter: "ELPS-FIX-FXS1",
          requestStartTime: "2025-01-14T15:07:57.4572598+13:00",
          requestCompleteTime: "2025-01-14T15:07:57.8082944+13:00",
          response: {
            "time-stamp": null,
            "in-broadcast-frames": null,
            "out-broadcast-frames": null,
            "in-multicast-frames": null,
            "out-multicast-frames": null,
            "in-frames": null,
            "out-frames": null,
            "in-errors": null,
            "out-errors": null,
            "in-discards": null,
            "out-discards": null,
            "in-octets": null,
            "out-octets": null,
            "in-error-undersize-frames": null,
            "in-error-oversize-frames": null,
            "in-error-fcs-frames": null,
          },
          requestDurationMs: 351,
        },
        {
          id: "OntInterfacePerformance",
          parameter: "ELPS-FIX-FXS1",
          requestStartTime: "2025-01-14T15:07:57.8084174+13:00",
          requestCompleteTime: "2025-01-14T15:07:58.0467003+13:00",
          response: {
            "intervals-15-minute": {
              current: {
                "time-stamp": null,
                "in-broadcast-frames": null,
                "out-broadcast-frames": null,
                "in-multicast-frames": null,
                "out-multicast-frames": null,
                "in-frames": null,
                "out-frames": null,
                "in-errors": null,
                "out-errors": null,
                "in-octets": null,
                "out-octets": null,
                "in-error-undersize-frames": null,
                "in-error-oversize-frames": null,
                "in-error-fcs-frames": null,
              },
              previous: {
                "time-stamp": null,
                "in-broadcast-frames": null,
                "out-broadcast-frames": null,
                "in-multicast-frames": null,
                "out-multicast-frames": null,
                "in-frames": null,
                "out-frames": null,
                "in-errors": null,
                "out-errors": null,
                "in-octets": null,
                "out-octets": null,
                "in-error-undersize-frames": null,
                "in-error-oversize-frames": null,
                "in-error-fcs-frames": null,
              },
            },
          },
          requestDurationMs: 238,
        },
        {
          id: "OntInterfaceState",
          parameter: "ELPS-FIX-TR069",
          requestStartTime: "2025-01-14T15:07:58.0467539+13:00",
          requestCompleteTime: "2025-01-14T15:07:58.2198674+13:00",
          response: {
            "oper-status": "down",
            "admin-status": "up",
            ethernet: null,
          },
          requestDurationMs: 173,
        },
        {
          id: "OntInterfaceStatistics",
          parameter: "ELPS-FIX-TR069",
          requestStartTime: "2025-01-14T15:07:58.2199092+13:00",
          requestCompleteTime: "2025-01-14T15:07:58.4708511+13:00",
          response: {
            "time-stamp": null,
            "in-broadcast-frames": null,
            "out-broadcast-frames": null,
            "in-multicast-frames": null,
            "out-multicast-frames": null,
            "in-frames": null,
            "out-frames": null,
            "in-errors": null,
            "out-errors": null,
            "in-discards": null,
            "out-discards": null,
            "in-octets": null,
            "out-octets": null,
            "in-error-undersize-frames": null,
            "in-error-oversize-frames": null,
            "in-error-fcs-frames": null,
          },
          requestDurationMs: 251,
        },
        {
          id: "OntInterfacePerformance",
          parameter: "ELPS-FIX-TR069",
          requestStartTime: "2025-01-14T15:07:58.470899+13:00",
          requestCompleteTime: "2025-01-14T15:07:58.7696488+13:00",
          response: {
            "intervals-15-minute": {
              current: {
                "time-stamp": null,
                "in-broadcast-frames": null,
                "out-broadcast-frames": null,
                "in-multicast-frames": null,
                "out-multicast-frames": null,
                "in-frames": null,
                "out-frames": null,
                "in-errors": null,
                "out-errors": null,
                "in-octets": null,
                "out-octets": null,
                "in-error-undersize-frames": null,
                "in-error-oversize-frames": null,
                "in-error-fcs-frames": null,
              },
              previous: {
                "time-stamp": null,
                "in-broadcast-frames": null,
                "out-broadcast-frames": null,
                "in-multicast-frames": null,
                "out-multicast-frames": null,
                "in-frames": null,
                "out-frames": null,
                "in-errors": null,
                "out-errors": null,
                "in-octets": null,
                "out-octets": null,
                "in-error-undersize-frames": null,
                "in-error-oversize-frames": null,
                "in-error-fcs-frames": null,
              },
            },
          },
          requestDurationMs: 299,
        },
        {
          id: "OntInterfaceState",
          parameter: "ELPS-FIX-VEIP",
          requestStartTime: "2025-01-14T15:07:58.7697067+13:00",
          requestCompleteTime: "2025-01-14T15:07:58.9409401+13:00",
          response: {
            "oper-status": "down",
            "admin-status": "up",
            ethernet: null,
          },
          requestDurationMs: 171,
        },
        {
          id: "OntInterfaceStatistics",
          parameter: "ELPS-FIX-VEIP",
          requestStartTime: "2025-01-14T15:07:58.9409758+13:00",
          requestCompleteTime: "2025-01-14T15:07:59.1941756+13:00",
          response: {
            "time-stamp": null,
            "in-broadcast-frames": null,
            "out-broadcast-frames": null,
            "in-multicast-frames": null,
            "out-multicast-frames": null,
            "in-frames": null,
            "out-frames": null,
            "in-errors": null,
            "out-errors": null,
            "in-discards": null,
            "out-discards": null,
            "in-octets": null,
            "out-octets": null,
            "in-error-undersize-frames": null,
            "in-error-oversize-frames": null,
            "in-error-fcs-frames": null,
          },
          requestDurationMs: 254,
        },
        {
          id: "OntInterfacePerformance",
          parameter: "ELPS-FIX-VEIP",
          requestStartTime: "2025-01-14T15:07:59.194229+13:00",
          requestCompleteTime: "2025-01-14T15:07:59.4392138+13:00",
          response: {
            "intervals-15-minute": {
              current: {
                "time-stamp": null,
                "in-broadcast-frames": null,
                "out-broadcast-frames": null,
                "in-multicast-frames": null,
                "out-multicast-frames": null,
                "in-frames": null,
                "out-frames": null,
                "in-errors": null,
                "out-errors": null,
                "in-octets": null,
                "out-octets": null,
                "in-error-undersize-frames": null,
                "in-error-oversize-frames": null,
                "in-error-fcs-frames": null,
              },
              previous: {
                "time-stamp": null,
                "in-broadcast-frames": null,
                "out-broadcast-frames": null,
                "in-multicast-frames": null,
                "out-multicast-frames": null,
                "in-frames": null,
                "out-frames": null,
                "in-errors": null,
                "out-errors": null,
                "in-octets": null,
                "out-octets": null,
                "in-error-undersize-frames": null,
                "in-error-oversize-frames": null,
                "in-error-fcs-frames": null,
              },
            },
          },
          requestDurationMs: 245,
        },
        {
          id: "AlarmEvents",
          parameter: "ELPS-FIX",
          requestStartTime: "2025-01-14T15:07:59.4393351+13:00",
          requestCompleteTime: "2025-01-14T15:07:59.4744045+13:00",
          response: {
            output: {
              events: {
                cursor: 6,
                "total-count": 6,
                event: [
                  {
                    description:
                      'The ONU "onu 6.0.2"(HWTCD6EE21AA) on channel termination "channel-termination 0/6.gpon" is in LOS.',
                    "event-identity": "onu-los-alarm",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": null,
                    "cleared-timestamp": "2024-11-27T23:44:17+00:00",
                    severity: "Cleared",
                    source: "UFFLAOLTLABA41_onu 6.0.2_ELPS-FIX",
                    timestamp: "2024/11/27 11:44:17PM+0000",
                    "timestamp-iso": "2024-11-27T23:44:17+00:00",
                  },
                  {
                    description:
                      'A local power outage has occurred for ONU "onu 6.0.2"(HWTCD6EE21AA).',
                    "event-identity": "onu-dying-gasp-alarm",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": "2024-11-27T23:44:16+00:00",
                    "cleared-timestamp": null,
                    severity: "Major",
                    source: "UFFLAOLTLABA41_onu 6.0.2_ELPS-FIX",
                    timestamp: "2024/11/27 11:44:16PM+0000",
                    "timestamp-iso": "2024-11-27T23:44:16+00:00",
                  },
                  {
                    description:
                      'The ONU "onu 6.0.2"(HWTCD6EE21AA) on channel termination "channel-termination 0/6.gpon" is in LOS.',
                    "event-identity": "onu-los-alarm",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": null,
                    "cleared-timestamp": "2024-11-21T01:13:34+00:00",
                    severity: "Cleared",
                    source: "UFFLAOLTLABA41_onu 6.0.2_ELPS-FIX",
                    timestamp: "2024/11/21 01:13:34AM+0000",
                    "timestamp-iso": "2024-11-21T01:13:34+00:00",
                  },
                  {
                    description:
                      'The ONU "onu 6.0.2"(HWTCD6EE21AA) on channel termination "channel-termination 0/6.gpon" is in LOS.',
                    "event-identity": "onu-los-alarm",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": null,
                    "cleared-timestamp": "2024-11-21T01:13:29+00:00",
                    severity: "Cleared",
                    source: "UFFLAOLTLABA41_onu 6.0.2_ELPS-FIX",
                    timestamp: "2024/11/21 01:13:29AM+0000",
                    "timestamp-iso": "2024-11-21T01:13:29+00:00",
                  },
                  {
                    description: "OUI/SN is used by a different device",
                    "event-identity": "Deploy ELPS-FIX on TR069 Server",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": "2024-11-21T01:13:11.266652+00:00",
                    "cleared-timestamp": null,
                    severity: "Warning",
                    source: "ELPS-FIX",
                    timestamp: "2024/11/21 01:13:11AM+0000",
                    "timestamp-iso": "2024-11-21T01:13:11.266652+00:00",
                  },
                  {
                    description:
                      "Failed action of orchestration-create device ELPS-FIX. Deployment failed for ONU: ELPS-FIX with ONU ID: 1 as another ONU exists with same ONU ID in channel partition: UFFLAOLTLABA41-6!",
                    "event-identity": "orchestration-create ELPS-FIX",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": "2024-11-21T01:03:17+00:00",
                    "cleared-timestamp": null,
                    severity: "Major",
                    source: "mosaic-cp-cda",
                    timestamp: "2024/11/21 01:03:17AM+0000",
                    "timestamp-iso": "2024-11-21T01:03:17+00:00",
                  },
                ],
              },
            },
          },
          requestDurationMs: 35,
        },
        {
          id: "ActiveOnuEvents",
          parameter: "ELPS-FIX",
          requestStartTime: "2025-01-14T15:07:59.4744728+13:00",
          requestCompleteTime: "2025-01-14T15:07:59.5016959+13:00",
          response: {
            output: {
              events: {
                cursor: 1,
                "total-count": 1,
                event: [
                  {
                    description:
                      'A local power outage has occurred for ONU "onu 6.0.2"(HWTCD6EE21AA).',
                    "event-identity": "onu-dying-gasp-alarm",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": "2024-11-27T23:44:16+00:00",
                    "cleared-timestamp": null,
                    severity: "Major",
                    source: "UFFLAOLTLABA41_onu 6.0.2_ELPS-FIX",
                    timestamp: "2024/11/27 11:44:16PM+0000",
                    "timestamp-iso": "2024-11-27T23:44:16+00:00",
                  },
                ],
              },
            },
          },
          requestDurationMs: 27,
        },
      ],
    },
    msg: "Received a message from the NEM worker",
  },
  {
    level: 30,
    levelLabel: "info",
    time: 1736820537615,
    pid: 8,
    hostname: "169.254.192.106",
    serviceName: "networkEnquiryResponseReceiver",
    systemName: "network",
    environment: "test2",
    context: "NetworkEnquiryResponseReceiverController",
    awsRequestId: "8cfcf1a4-0701-5658-8968-ae5bce67ef4a",
    "x-invoke-id": "e4d37bea-cfe3-4986-a468-f859d6715ac1",
    baggage: {},
    "x-correlation-id": "8cfcf1a4-0701-5658-8968-ae5bce67ef4a",
    "x-correlation-trace-id":
      "Root=1-6785c739-358f9a2861c4cfdd38825e80;Parent=53fe01529eaddfc4;Sampled=0;Lineage=1:38b32d7e:0",
    message: {
      id: "d1d4b960-82f9-42b6-8815-802f920d93f9",
      type: "ontStatus",
      context: {
        piid: "UFF000005129284",
        request: { piid: "UFF000005129284" },
      },
      authorisation: {
        partyIds: ["PTY000000001460"],
        scopes: ["diagnostics", "products:read"],
      },
      baggage: {
        traceId: "d1d4b960-82f9-42b6-8815-802f920d93f9",
        whenEnqueued: "2024-11-04T14:54:32.287+13:00",
        "x-invocation-id": "d5db2e39-a763-4949-a779-7d03702a642e",
        whenApiCompleted: "2024-11-04T14:54:32.287+13:00",
        requestUserId: "0oapyx1vzV496P9721d6",
        whenNemReceived: "2025-01-14T15:08:56.7716132+13:00",
        whenNemCompleted: "2025-01-14T15:08:57.3988635+13:00",
      },
      results: [
        {
          id: "OntDevice",
          requestStartTime: "2025-01-14T15:08:56.7725019+13:00",
          requestCompleteTime: "2025-01-14T15:08:56.8604116+13:00",
          response: {
            device: [
              {
                "device-name": "ELPS-FIX",
                state: "deployed",
                "profile-vector-name": "ONU_Profile_Vector",
                "object-parameters": {
                  "onu-id": 2,
                  "serial-number": "HWTCD6EE21AA",
                },
                metadata: {
                  inventory: {
                    "software-rev": "V5R021C00S130",
                    "serial-num": "HWTCD6EE21AA",
                    "clei-code": "HG8240H5",
                  },
                },
              },
            ],
          },
          requestDurationMs: 88,
        },
        {
          id: "OltInterface",
          parameter: "ELPS-FIX",
          requestStartTime: "2025-01-14T15:08:56.8604816+13:00",
          requestCompleteTime: "2025-01-14T15:08:56.9451122+13:00",
          response: {
            interface: [
              {
                "subtended-device-names": ["HG8240H5-21AA", "ELPS-FIX"],
                "device-name": "UFFLAOLTLABA41",
                "interface-type": "gpon",
                "interface-name": "UFFLAOLTLABA41-6",
                "interface-id": "gpon 0/6",
                state: "deployed",
                "bundle-name": "UFFLAOLTLABA41-6",
              },
            ],
          },
          requestDurationMs: 85,
        },
        {
          id: "OntDeviceInspection",
          parameter: "ELPS-FIX",
          requestStartTime: "2025-01-14T15:08:56.9451558+13:00",
          requestCompleteTime: "2025-01-14T15:08:57.3007681+13:00",
          response: {
            "single-slot-device": {
              onu: {
                uptime: 0,
                uplink: {
                  transceiver: {
                    "tx-power": 0,
                    "rx-power": 0,
                    "fiber-distance": 0,
                  },
                },
              },
            },
            status: { online: false },
          },
          requestDurationMs: 355,
        },
        {
          id: "AlarmEvents",
          parameter: "ELPS-FIX",
          requestStartTime: "2025-01-14T15:08:57.300825+13:00",
          requestCompleteTime: "2025-01-14T15:08:57.3508504+13:00",
          response: {
            output: {
              events: {
                cursor: 6,
                "total-count": 6,
                event: [
                  {
                    description:
                      'The ONU "onu 6.0.2"(HWTCD6EE21AA) on channel termination "channel-termination 0/6.gpon" is in LOS.',
                    "event-identity": "onu-los-alarm",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": null,
                    "cleared-timestamp": "2024-11-27T23:44:17+00:00",
                    severity: "Cleared",
                    source: "UFFLAOLTLABA41_onu 6.0.2_ELPS-FIX",
                    timestamp: "2024/11/27 11:44:17PM+0000",
                    "timestamp-iso": "2024-11-27T23:44:17+00:00",
                  },
                  {
                    description:
                      'A local power outage has occurred for ONU "onu 6.0.2"(HWTCD6EE21AA).',
                    "event-identity": "onu-dying-gasp-alarm",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": "2024-11-27T23:44:16+00:00",
                    "cleared-timestamp": null,
                    severity: "Major",
                    source: "UFFLAOLTLABA41_onu 6.0.2_ELPS-FIX",
                    timestamp: "2024/11/27 11:44:16PM+0000",
                    "timestamp-iso": "2024-11-27T23:44:16+00:00",
                  },
                  {
                    description:
                      'The ONU "onu 6.0.2"(HWTCD6EE21AA) on channel termination "channel-termination 0/6.gpon" is in LOS.',
                    "event-identity": "onu-los-alarm",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": null,
                    "cleared-timestamp": "2024-11-21T01:13:34+00:00",
                    severity: "Cleared",
                    source: "UFFLAOLTLABA41_onu 6.0.2_ELPS-FIX",
                    timestamp: "2024/11/21 01:13:34AM+0000",
                    "timestamp-iso": "2024-11-21T01:13:34+00:00",
                  },
                  {
                    description:
                      'The ONU "onu 6.0.2"(HWTCD6EE21AA) on channel termination "channel-termination 0/6.gpon" is in LOS.',
                    "event-identity": "onu-los-alarm",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": null,
                    "cleared-timestamp": "2024-11-21T01:13:29+00:00",
                    severity: "Cleared",
                    source: "UFFLAOLTLABA41_onu 6.0.2_ELPS-FIX",
                    timestamp: "2024/11/21 01:13:29AM+0000",
                    "timestamp-iso": "2024-11-21T01:13:29+00:00",
                  },
                  {
                    description: "OUI/SN is used by a different device",
                    "event-identity": "Deploy ELPS-FIX on TR069 Server",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": "2024-11-21T01:13:11.266652+00:00",
                    "cleared-timestamp": null,
                    severity: "Warning",
                    source: "ELPS-FIX",
                    timestamp: "2024/11/21 01:13:11AM+0000",
                    "timestamp-iso": "2024-11-21T01:13:11.266652+00:00",
                  },
                  {
                    description:
                      "Failed action of orchestration-create device ELPS-FIX. Deployment failed for ONU: ELPS-FIX with ONU ID: 1 as another ONU exists with same ONU ID in channel partition: UFFLAOLTLABA41-6!",
                    "event-identity": "orchestration-create ELPS-FIX",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": "2024-11-21T01:03:17+00:00",
                    "cleared-timestamp": null,
                    severity: "Major",
                    source: "mosaic-cp-cda",
                    timestamp: "2024/11/21 01:03:17AM+0000",
                    "timestamp-iso": "2024-11-21T01:03:17+00:00",
                  },
                ],
              },
            },
          },
          requestDurationMs: 50,
        },
        {
          id: "ActiveOnuEvents",
          parameter: "ELPS-FIX",
          requestStartTime: "2025-01-14T15:08:57.3509471+13:00",
          requestCompleteTime: "2025-01-14T15:08:57.3986965+13:00",
          response: {
            output: {
              events: {
                cursor: 1,
                "total-count": 1,
                event: [
                  {
                    description:
                      'A local power outage has occurred for ONU "onu 6.0.2"(HWTCD6EE21AA).',
                    "event-identity": "onu-dying-gasp-alarm",
                    "object-name": "ELPS-FIX",
                    "object-type": "device",
                    "raised-timestamp": "2024-11-27T23:44:16+00:00",
                    "cleared-timestamp": null,
                    severity: "Major",
                    source: "UFFLAOLTLABA41_onu 6.0.2_ELPS-FIX",
                    timestamp: "2024/11/27 11:44:16PM+0000",
                    "timestamp-iso": "2024-11-27T23:44:16+00:00",
                  },
                ],
              },
            },
          },
          requestDurationMs: 48,
        },
      ],
    },
    msg: "Received a message from the NEM worker",
  },
];

// getDurationPerRequest(result.message.results);
function getDurationPerRequest(allTests) {
  console.log("TestId,Piid,OntSn,OLT,Method,Parameter,Duration(ms)");

  // 'testObj' is each item in 'allTests'
  allTests.forEach((testObj) => {
    // Iterate over 'testObj.message.results'
    for (const result of testObj.message.results) {
      const testId = testObj.message.id;
      const piid = testObj.message.context.piid;
      const ontSn = testObj.message.context.request.ontSerialNumber;
      const olt = testObj.message.results.find(
        (result) => result.id === "OltInterface"
      ).response.interface[0]["device-name"];
      const method = result.id;
      const param = result.parameter || "N/A";
      const duration = result.requestDurationMs;
      console.log(
        `${testId},${piid},${ontSn},${olt},${method},${param},${duration}`
      );
    }

    // Calculate total for each set of results
    const total = testObj.message.results.reduce(
      (acc, result) => acc + result.requestDurationMs,
      0
    );
    console.log(
      `${testObj.message.id},${testObj.message.context.piid},${testObj.message.context.request.ontSerialNumber},,Total,,${total}`
    );
  });
}

getDurationPerRequest(allTests);
