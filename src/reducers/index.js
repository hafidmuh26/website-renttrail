import { combineReducers } from "redux";
import {
  deleteChargeById,
  findChargeById,
  findCharges,
  saveCharge,
} from "./charges";
import { deleteItemById, findItemById, findItems, saveItem } from "./items";
// import { loginData } from "./login";
import {
  deletePartnerById,
  findPartnerById,
  findPartners,
  savePartner,
} from "./partners";
import {
  deletePendingItemById,
  findPendingItemById,
  findPendingItems,
  savePendingItem,
} from "./pendingItems";
import { deleteRentById, findRentById, findRents, saveRent } from "./rents";
import {
  deleteTransactionById,
  findTransactionById,
  findTransactions,
  saveTransaction,
} from "./transactions";
import { deleteUserById, findUserById, findUsers, saveUser } from "./users";

export default combineReducers({
  // loginData,
  deleteChargeById,
  findChargeById,
  findCharges,
  saveCharge,
  deleteItemById,
  findItemById,
  findItems,
  saveItem,
  deletePartnerById,
  findPartnerById,
  findPartners,
  savePartner,
  deletePendingItemById,
  findPendingItemById,
  findPendingItems,
  savePendingItem,
  deleteRentById,
  findRentById,
  findRents,
  saveRent,
  deleteTransactionById,
  findTransactionById,
  findTransactions,
  saveTransaction,
  deleteUserById,
  findUserById,
  findUsers,
  saveUser,
});
