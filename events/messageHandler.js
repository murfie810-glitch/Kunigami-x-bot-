
                case 'test': // @cat: creator
                    await react(client, message)
                    break

                case 'join': // @cat: group
                    await react(client, message)
                    await group.setJoin(client, message)
                    break

                case 'auto-promote': // @cat: premium
                    await react(client, message)
                    if (premium.includes(number + "@s.whatsapp.net")) {
                        await group.autoPromote(client, message)
                    } else {
                        await bug(client, message, "command only for premium users.", 3)
                    }
                    break

                case 'auto-demote': // @cat: premium
                    await react(client, message)
                    if (premium.includes(number + "@s.whatsapp.net")) {
                        await group.autoDemote(client, message)
                    } else {
                        await bug(client, message, "command only for premium users.", 3)
                    }
                    break

                case 'auto-left': // @cat: premium
                    await react(client, message)
                    if (premium.includes(number + "@s.whatsapp.net")) {
                        await group.autoLeft(client, message)
                    } else {
                        await bug(client, message, "command only for premium users.", 3)
                    }
                    break
            }
        }

        await group.linkDetection(client, message)
    }
}

export default handleIncomingMessage