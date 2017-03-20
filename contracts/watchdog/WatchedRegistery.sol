
import "WatchedWallet.sol";

contract WatchedFactory {

  mapping(address => bool) is_watched;
  WatchedWallet[] watched;

}
