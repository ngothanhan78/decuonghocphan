// ════════════════════════════════════════════════════════════════
//  modules/tonghop/tonghop-api.js
//  API calls cho module Tổng hợp (Admin + ThuKy)
// ════════════════════════════════════════════════════════════════

const TongHopAPI = {
  _auth(payload) {
    return { ...payload, email: window._currentUser?.email || '' };
  },

  kiemTraNopBai()             { return API.call(this._auth({ action: 'th_kiemtra'                         }), 30000); },
  sapXep()                    { return API.call(this._auth({ action: 'th_sapxep'                          }), 60000); },
  tongHop()                   { return API.call(this._auth({ action: 'th_tonghop'                         }), 120000); },
  getVerSheets()              { return API.call(this._auth({ action: 'th_getvers'                         })); },
  getVerHeaders(sheetName)    { return API.call(this._auth({ action: 'th_getheaders', sheetName          })); },
  trichXuat(sheetName, colIndex) { return API.call(this._auth({ action: 'th_trichxuat', sheetName, colIndex }), 60000); },
};

window.TongHopAPI = TongHopAPI;
