import AfriAIRollbackEngine from "./AfriAIRollbackEngine";

/**
 * Emergency system restore controller
 */

const AfriAIEmergencyRestore = {
  restoreLast() {
    const last = AfriAIRollbackEngine.history.slice(-1)[0];

    if (!last) {
      return { status: "no_history" };
    }

    return AfriAIRollbackEngine.rollback(last.id);
  },

  restoreAll() {
    return AfriAIRollbackEngine.history.map((h) =>
      AfriAIRollbackEngine.rollback(h.id)
    );
  }
};

export default AfriAIEmergencyRestore;
